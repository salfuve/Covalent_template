import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, CovalentNotificationsModule } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../cart.service';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  itemArray: any[] = [];
  imageArray: any[] = [{

    columnSize: '40',
    column: [{
      name: '',
      url: '../../assets/images/alex-lambley-205711-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/norman-toth-177290-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/kaci-baum-108756-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/ariel-lustre-232891-min.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      name: '',
      url: '../../assets/images/pete-bellis-189599-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/remy_loz-188297-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/brooke-cagle-195860-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/freestocks-org-195640-min.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      name: '',
      url: '../../assets/images/pete-bellis-189613-min.jpg',
      isclicked: false,
    }, {
      name: '',
      url: '../../assets/images/pete-bellis-191833-min.jpg',
      isclicked: false,
    },
    ],
  }, {
    columnSize: '25',
    column: [{
      name: '',
      url: '../../assets/images/valerie-elash-275588-min.jpg',
      isclicked: false,
    },
    {
      name: '',
      url: '../../assets/images/jason-blackeye-221058-min.jpg',
      isclicked: false,
    }],
  }];

  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent Quickstart');
    this.itemArray = this.cartService.getItems();
  }

  clickedImage(imageUrl: any): void {
    this.router.navigate(['/image-view', { url: imageUrl }]);
  }

  clickedAddToCart(imageUrl: any): void {
    const img: string = imageUrl;
    this.cartService.clickedAddToCart(img);
  }

  notifications(): number {
    const nItems: number = this.cartService.getNitems();
    return nItems;
  }

  clickedCart(): void {
    this.itemArray = this.cartService.getItems();
  }
}
