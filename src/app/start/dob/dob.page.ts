import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dob',
  templateUrl: './dob.page.html',
  styleUrls: ['./dob.page.scss'],
})
export class DobPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
