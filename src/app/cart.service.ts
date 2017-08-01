import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Column, Image, Item } from './shared/backend/models';

@Injectable()
export class CartService {

  itemArray: Item[] = [];
  constructor(public snackBar: MdSnackBar) { }

  public clickedAddToCart(imageUrl: any): void {
    const items: Item[] = this.itemArray;
    const msg: string = 'Added to cart';
    const action: string = 'Ok';
    const color: string = 'green';
    const duration: number = 2000;
    this.snackBar.open(msg, action, {
      duration: duration,
      extraClasses: ['bgc-' + color + '-600'],
    });
    items.push(imageUrl);
  }
  public getNitems(): number {
    return this.itemArray.length;
  }
  public getItems(): any {
    return this.itemArray;
  }
}
