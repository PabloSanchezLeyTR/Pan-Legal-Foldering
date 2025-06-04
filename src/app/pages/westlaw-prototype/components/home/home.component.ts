import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  sidebarCollapsed: boolean = true;
  showTitle: boolean = true;
  showSearchBarFooter: boolean = true;
  hideFooter: boolean = false;
  showBanner: boolean = true;
  expandedFooter: boolean = false;

  constructor(public location: Location, private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        const urls = this.location.path().split('/').filter(Boolean);
        this.showTitle = !urls.includes('case-details');
        this.showSearchBarFooter = urls.includes('research-confirmation') || urls.includes('keyword-search');

        this.showSearchBarFooter = urls.includes('keyword-search');
        this.showBanner = !(urls.includes('deep-research') || urls.includes('deep-research-v2') || urls.includes('keyword-search') || urls.includes('case-details'));
        this.hideFooter = urls.includes('case-details')  || urls.includes('research-results');
      });

  }

  toggleSidebar(collapse: boolean) {
    this.sidebarCollapsed = collapse;
  }

  searchBarFocused() {
    this.expandedFooter = true;
  }

  searchBarBlur() {
    this.expandedFooter = false;
  }
}
