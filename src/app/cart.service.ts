import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Column, Image, Item } from './shared/backend/models';

@Injectable()
export class CartService {

  itemArray: Item[] = [];
  item: Item = { name: '', url: '', count: 0 };
  constructor(public snackBar: MdSnackBar) { }

  public clickedAddToCart(image: Column): void {
    let item: Item = this.item;
    const items: Item[] = this.itemArray;
    const msg: string = 'Added to cart';
    const action: string = 'Ok';
    const color: string = 'green';
    const duration: number = 2000;

    this.snackBar.open(msg, action, {
      duration: duration,
      extraClasses: ['bgc-' + color + '-600'],
    });
    image.count++;
    item = { name: image.name, url: image.url, count: image.count };
    this.isRepeated(item, items);
    items.push(item);
  }
  public isRepeated(item: Item, items: Item[]): void {
    let isRepeated: boolean = false;
    for (let i: number = 0; i < items.length; i++) {
      if ((item.url === items[i].url)) {
        items.splice(items.indexOf(items[i]), 1);
        isRepeated = true;
      }
    }
  }
  public getNitems(): number {
    return this.itemArray.length;
  }
  public getItems(): any {
    return this.itemArray;
  }
}
