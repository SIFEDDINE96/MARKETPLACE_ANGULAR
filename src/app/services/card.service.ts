import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cardItems = new BehaviorSubject<Array<{item: Item, quantity: number}>>([]);
  constructor() { }

  getCardItems = () => this._cardItems;

  addQte = (item: Item, quantity = 1) => {
    const currentCardItems =  this._cardItems.getValue();
    const searchItem = currentCardItems.find(i => i.item.id === item.id);
    if (searchItem){
      searchItem.quantity += quantity;
    }else {
      currentCardItems.push({item, quantity})
    }
  }
  reduceQte = (item: Item, quantity = 1) => {
    const currentCardItems =  this._cardItems.getValue();
    const searchItem = currentCardItems.find(i => i.item.id === item.id);
    if (searchItem){
      if(searchItem.quantity>1){
        searchItem.quantity -= quantity;
      }

    }
  }

  removeItem = (item : Item) => {
    let currentCardItems = this._cardItems.getValue();
    currentCardItems = currentCardItems.filter(i => i.item.id !== item.id);
    this._cardItems.next(currentCardItems);
  }
}
