import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qs-app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {

  imageUrl: string;

  constructor(private location: Location, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe( (data: any) => {
      this.imageUrl = data.url;
    });
  }

  clickedImage(): void {
    this.location.back();
  }
}
