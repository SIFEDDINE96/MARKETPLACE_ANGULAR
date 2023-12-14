import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {CardService} from "../services/card.service";
import {async, BehaviorSubject, Subscription} from "rxjs";
import {Item} from "../models/item";
import {MarketplaceItemListComponent} from "../marketplace-item-list/marketplace-item-list.component";
import {CurrencyPipe, NgForOf, UpperCasePipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MarketplaceItemListComponent,
    NgForOf,
    MatCardModule,
    UpperCasePipe,
    CurrencyPipe,
    MatTooltipModule
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit{
  ngOnInit(): void {
  }
  cartItems: Subscription; // Define the array to hold cart items
  data: Array<{ item: Item, quantity: number }> = [];
  som =0;

  constructor(private cartService: CardService) {
    this.cartItems = this.cartService.getCardItems().subscribe( value => {
      this.data = value;
    }); // Fetch cart items from the cart service
  }

  // @ts-ignore
  addQuantity(item) {
    this.cartService.addQte(item)
  }
  // @ts-ignore
  reduceQuantity(item) {
    this.cartService.reduceQte(item)
  }
}
