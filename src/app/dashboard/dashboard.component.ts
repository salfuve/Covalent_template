import { showWarningOnce } from 'tslint/lib/error';
import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { Router } from '@angular/router';
import { Component, Input, NgZone, OnDestroy, OnInit, setTestabilityGetter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, CovalentNotificationsModule } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { Article, Item } from '../shared/backend/models';
import { articleArray } from '../shared/backend/mock-data';
import { CardComponent } from '../card/card.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  private itemArray: Item;
  private collectionArray: Article[] = articleArray;
  private showArray: Article[][] = [[], [], [], []];

  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent e-Commerce');
  }

  /**
   * iterate over collectionArray and put the articles ordered by columns in showArray,then return showArray
   *
   * @param {number} index
   * @param {number} start
   * @returns {Article[]}
   * @memberof DashboardComponent
   */
  getColumn(index: number, start: number): Article[] {
    this.showArray[index] = [];
    let count: number = 0;
    for (let i: number = index; i < this.collectionArray.length; i = i + start) {
      this.showArray[index][count] = this.collectionArray[i];
      count++;
    }
    return this.showArray[index];
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

}
