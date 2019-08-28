import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  slideOpts2 = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 400,
    loop: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
