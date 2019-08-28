import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public chartLabels:string[] = ['me','myself','delf'];
public chartData:number[] = [1200,1500,2000];
public chartType:string = "doughnut";

  constructor(public router:Router, public navCtrl: NavController){}

  water(){
    this.navCtrl.navigateForward('water')
  }

}
