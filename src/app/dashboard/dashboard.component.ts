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
  styleUrls: ['./dashboard.component.scss']
  // providers: [CartService],
})
export class DashboardComponent implements OnInit {
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

  constructor(
    private _titleService: Title,
    private router: Router,
    private dialogService: TdDialogService,
    public snackBar: MdSnackBar,
    private cartService: CartService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent Quickstart');
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
}
