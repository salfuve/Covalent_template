import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, CovalentNotificationsModule } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { Article, Item } from '../shared/backend/models';
import { articleArray } from '../shared/backend/mock-data';

@Component({
  selector: 'qs-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  itemArray: Item;
  @Input() card: Article;

  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.itemArray = this.cartService.getItems();
  }

  clickedImage(imageUrl: string): void {
    this.router.navigate(['/image-view', { url: imageUrl }]);
  }

  clickedAddToCart(article: Article): void {
    this.cartService.clickedAddToCart(article);
  }
}
