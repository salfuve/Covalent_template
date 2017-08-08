import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, CovalentNotificationsModule } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { Column, Article, Item } from '../shared/backend/models';
import { articleArray } from '../shared/backend/mock-data';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  itemArray: Item;
  artArray: Article[] = articleArray;

  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent Quickstart');

  }

  notifications(): number {
    const nItems: number = this.cartService.getNitems();
    return nItems;
  }

  clickedCart(): void {
    this.itemArray = this.cartService.getItems();
  }
  // when you click the icon of an item inside the cart
  clickedItem(imageUrl: any): void {
    this.router.navigate(['/image-view', { url: imageUrl }]);
  }
  // clickedRemove(itemArray: Item[], item: string): void {
  //    this.itemArray = this.cartService.removeItem(itemArray, item);
  //  }
}
