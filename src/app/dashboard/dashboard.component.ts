import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  imageArray: any[] = [{
    columnSize: '40',
    column: [{
      url: '../../assets/images/alex-lambley-205711.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/norman-toth-177290.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/kaci-baum-108756.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/ariel-lustre-232891.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/pete-bellis-189599.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/remy_loz-188297.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/brooke-cagle-195860.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/freestocks-org-195640.jpg',
      isclicked: false,
    }],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/pete-bellis-189613.jpg',
      isclicked: false,
    }, {
      url: '../../assets/images/pete-bellis-191833.jpg',
      isclicked: false,
    },
    ],
  }, {
    columnSize: '25',
    column: [{
      url: '../../assets/images/valerie-elash-275588.jpg',
      isclicked: false,
    },
    {
      url: '../../assets/images/jason-blackeye-221058.jpg',
      isclicked: false,
    }],
  }];

  constructor(private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent Quickstart');
  }
  // clickedImage(imageUrl: string): void {

  // }
}
