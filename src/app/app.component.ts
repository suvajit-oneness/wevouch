import { Component } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wevouch';
  public showHeaderFooterSidebar: boolean = false;

  constructor(private _router:Router, private _loader: NgxUiLoaderService) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/registration') {
          this.showHeaderFooterSidebar = false;
        } else {
          this.showHeaderFooterSidebar = true;
        }
      }
    });
  }
}
