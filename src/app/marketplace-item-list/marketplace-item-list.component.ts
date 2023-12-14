import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../models/item";
import {ItemService} from "../services/item.service";
import {CardService} from "../services/card.service";
import {CurrencyPipe, NgIf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-marketplace-item-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.scss'
})
export class MarketplaceItemListComponent implements OnInit{

  @Input() item!: Item;
  constructor(
    private itemService : ItemService,
    private cardService : CardService
  ) {}
  ngOnInit() {
  }

  addToCard = (item : Item) => {
    this.itemService.markItemAsSelected(item);
    this.cardService.addQte(item);
  }

  removeFromCard = (item : Item) => {
    this.itemService.markItemAsUnselected(item);
    this.cardService.removeItem(item);
  }
}
