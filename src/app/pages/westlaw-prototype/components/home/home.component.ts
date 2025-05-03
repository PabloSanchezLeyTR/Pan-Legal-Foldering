import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  sidebarCollapsed: boolean = false;
  showTitle: boolean = true; 

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe((urls: UrlSegment[]) => {
      console.log('Current URL segments:', urls);
      
      if (urls.some(url => url.path === 'case-details')) {
        this.showTitle = false;
      }
    })
  }

  toggleSidebar(collapse: boolean) {
    this.sidebarCollapsed = collapse;
  }
}
