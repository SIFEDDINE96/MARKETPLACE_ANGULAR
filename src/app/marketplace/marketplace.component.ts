import {Component, OnInit} from '@angular/core';
import {MarketplaceItemListComponent} from "../marketplace-item-list/marketplace-item-list.component";
import {Item} from "../models/item";
import {ItemService} from "../services/item.service";
import {NgForOf} from "@angular/common";
import {BasketComponent} from "../basket/basket.component";

@Component({
  selector: 'app-marketplace',
  standalone: true,
    imports: [
        MarketplaceItemListComponent,
        NgForOf,
        BasketComponent
    ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent implements OnInit{

  items!: Item[];
  constructor(private itemService: ItemService) {
    this.items = itemService.itemsList;
  }

  ngOnInit(): void {

  }
}
