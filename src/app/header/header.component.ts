import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {Item} from "../models/item";
import {Subscription} from "rxjs";
import {CardService} from "../services/card.service";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BasketComponent} from "../basket/basket.component";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BasketComponent,
    RouterOutlet,
    MatListModule,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{

  // @ts-ignore
  @Input() inputSideNav: MatSidenav;

  cardItems: {item: Item, quantity: number}[] = [];
  cardItemSub!: Subscription;

  constructor(
    public cardService : CardService
  ) {}

  ngOnInit() {
    this.cardItemSub = this.cardService.getCardItems().subscribe(cardItems => {
      this.cardItems = cardItems;
    })
  }
  ngOnDestroy() {
    this.cardItemSub.unsubscribe();
  }

}
