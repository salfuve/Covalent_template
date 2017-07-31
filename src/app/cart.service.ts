import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class CartService {

  itemArray: string[] = [];

  imageArray: any[] = [{

    columnSize: '40',
    column: [{
      url: '../../assets/images/alex-lambley-205711-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/norman-toth-177290-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/kaci-baum-108756-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/ariel-lustre-232891-min.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/pete-bellis-189599-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/remy_loz-188297-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/brooke-cagle-195860-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/freestocks-org-195640-min.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/pete-bellis-189613-min.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/pete-bellis-191833-min.jpg',
      isclicked: false,
    },
    ],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/valerie-elash-275588-min.jpg',
      isclicked: false,
    },
    {
      url: '../../assets/images/jason-blackeye-221058-min.jpg',
      isclicked: false,
    }],
  }];

  constructor(public snackBar: MdSnackBar) { }

  public clickedAddToCart(imageUrl: any): void {
    const items: string[] = this.itemArray;
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
}
