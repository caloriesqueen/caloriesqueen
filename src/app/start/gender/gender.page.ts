import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  constructor(public router:Router,private selector: WheelSelector) { 
      }
  

  ngOnInit() {
  }

}
