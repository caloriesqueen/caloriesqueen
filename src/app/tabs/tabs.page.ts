import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  constructor(private storage: Storage, private router: Router) {
    var _this = this;
    _this.storage.get("START").then(function(val) {
      console.log(val);
      //      _this.pushsetup();
      if (val == null) {
        _this.router.navigate(["/start"]);
      } else {
        _this.storage.get("USER_KEY").then(function(val) {
          console.log(val);
          //      _this.pushsetup();
          if (val == null) {
            _this.router.navigate(["/login"]);
          }
        });
      }
    });
  }
}
