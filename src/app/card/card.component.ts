import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, CovalentNotificationsModule } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { Column, Image, Item } from '../shared/backend/models';
import { imageArray } from '../shared/backend/mock-data';

@Component({
  selector: 'qs-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  itemArray: Item;
  images: Image[] = imageArray;
  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.itemArray = this.cartService.getItems();

  }
  clickedImage(imageUrl: any): void {
    this.router.navigate(['/image-view', { url: imageUrl }]);
  }

  clickedAddToCart(image: Column): void {
    this.cartService.clickedAddToCart(image);
  }

}
