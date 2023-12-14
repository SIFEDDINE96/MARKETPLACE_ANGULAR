import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsList! : Item[];
  constructor() {
    this.itemsList = [
      {
        id: 1,
        title: 'Air jordan',
        category: 'Adult',
        image: 'https://www.sneakers-actus.fr/wp-content/uploads/2020/05/Air-Jordan-1-mi-montante-blanche-rouge-et-noir-2020-6.jpg',
        price: 120,
        description: 'La Air Jordan 1 Mid Chicago Black Toe est arrivée il y a quelques semaines au Nike Store. Compte tenu de la très forte demande, la basket mi-montante n’a pas tardé à être en rupture de stock. Les fans perçoivent en elle un mélange de 2 Jordan 1 OG prestigieuses, la Chicago Bulls et la Black Toe. Il ne faut pas plus pour produire une hype assez folle',
        isSelected: false,
      },
      {
        id: 2,
        title: 'Chicago Bulls Michael Jordan',
        category: 'Adult',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-michael-jordan-1997-road-authentic-jersey-by-mitchell-and-ness-scarlett-mens_ss4_p-11997800+u-1hsu55yyq2qpqvgqj920+v-5ce66ba350de42adaeefdba320b94dff.jpg?_hv=2&w=340',
        price: 295,
        description: 'Chicago Bulls Michael Jordan 1997 Road Authentic Jersey By Mitchell & Ness - Scarlett - Mens',
        isSelected: false,
      },
      {
        id: 3,
        title: 'Jacket Nike',
        category: 'mens',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-city-edition-thermaflex-jacket-mens_ss5_p-13392656+u-xwm0vuwdizbccstpjkly+v-opbihcjj2g2zn6bsi4y1.jpg?_hv=2&w=340',
        price: 100,
        description: 'Chicago Bulls Nike City Edition Thermaflex Jacket - Mens',
        isSelected: false,
      }
    ]
  }

  markItemAsSelected = (p: Item ) => {
    p.isSelected = true;
  }
  markItemAsUnselected = (p: Item ) => {
    p.isSelected = false;
  }
}
