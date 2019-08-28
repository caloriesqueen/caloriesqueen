import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  slideOpts2 = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoPlay: true
  };
  constructor(private storage:Storage ,public router: Router) { 
    var that = this;
    that.storage.set('START', '1');
  }

  ngOnInit() {
  }

}
