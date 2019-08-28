import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public router:Router) { }

  ngOnInit() {
  }

  login(){

  }

}
