import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Article, Item } from './shared/backend/models';

@Injectable()
export class CartService {

  itemArray: Item[] = [];
  item: Item = { name: '', url: '', count: 0 };
  constructor(public snackBar: MdSnackBar) { }

  public clickedAddToCart(article: Article): void {
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
    article.count++;
    item = { name: article.name, url: article.url, count: article.count };
    this.isRepeated(item, items);
    items.push(item);
  }
  /**
   * If the item added to cart is repeated, remove it from the array and
   * add 1 to count
   * @param {Item} item
   * @param {Item[]} items
   * @memberof CartService
   */
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
  /**
   * Remove item from the cart
   * @param {Item[]} itemArray
   * @param {string} itemUrl
   * @returns {*}
   * @memberof CartService
   */
  // public removeItem(itemArray: Item[], itemUrl: string): any {
  //   let items: Item[] = itemArray;
  //   let itemsAux: Item[] = [];
  //   for (let i: number = 0; i < items.length; i++) {
  //     if (itemUrl === items[i].url) {
  //       let index: number = i;
  //       items[i].count = 0;
  //       items.splice(i, 1);

  //     } else {
  //       itemsAux.push(items[i]);
  //     }
  //   }
  //   return itemsAux;
  // }
}
