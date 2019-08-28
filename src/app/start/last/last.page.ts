import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-last",
  templateUrl: "./last.page.html",
  styleUrls: ["./last.page.scss"]
})
export class LastPage implements OnInit {
  constructor(private storage:Storage ,public router: Router) {}

  ngOnInit() {}
  session() {
    var that = this;
    that.storage.set('USER_KEY', '1');
    that.router.navigate(['/tabs/tab1']);
  }
}
