import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  slideOpts = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    loop: true,
  };
  slideOpts2 = {
    slidesPerView: 1,
    initialSlide: 2,
    speed: 400,
    loop: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
