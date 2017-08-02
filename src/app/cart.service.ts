import { BoundNodeCallbackObservable } from 'rxjs/observable/BoundNodeCallbackObservable';
import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Column, Image, Item } from './shared/backend/models';

@Injectable()
export class CartService {

  itemArray: Item[] = [];
  item: Item = { name: '', url: '', count: 1 };
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

    item = { name: image.name, url: image.url, count: image.count };
    let result: boolean = this.isRepeated(item, items);
    if (!(result)) {
      items.push(item);
    } else {
      item.count++;
      items.splice(items.indexOf(item), 1);
      item.count--;
      items.push(item);
    }
  }

  public isRepeated(item: Item, items: Item[]): boolean {
    let isRepeated: boolean = false;
    for (let i: number = 0; i < items.length; i++) {
      if ((item.url === items[i].url)) {
        isRepeated = true;
      }

    }
    return isRepeated;
  }

  public getNitems(): number {
    return this.itemArray.length;
  }
  public getItems(): any {
    return this.itemArray;
  }
}
