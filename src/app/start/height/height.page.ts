import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';

@Component({
  selector: 'app-height',
  templateUrl: './height.page.html',
  styleUrls: ['./height.page.scss'],
})
export class HeightPage implements OnInit {

  jsonData:any;
  constructor(public router:Router,private selector: WheelSelector) { 
    this.jsonData = {
      numbers: [
       { description: "1" },
        { description: "2" },
        { description: "3" }
      ],
      fruits: [
        { description: "Apple" },
        { description: "Banana" },
        { description: "Tangerine" }
      ],
      firstNames: [
        { name: "Fred", id: '1' },
        { name: "Jane", id: '2' },
        { name: "Bob", id: '3' },
        { name: "Earl", id: '4' },
        { name: "Eunice", id: '5' }
      ],
      lastNames: [
        { name: "Johnson", id: '100' },
        { name: "Doe", id: '101' },
        { name: "Kinishiwa", id: '102' },
        { name: "Gordon", id: '103' },
        { name: "Smith", id: '104' }
      ]
    };
  }
  

  ngOnInit() {
  }

  open(){
    this.selector.show(this.jsonData);
    //this.router.navigate(['/dob']);
  }
}
