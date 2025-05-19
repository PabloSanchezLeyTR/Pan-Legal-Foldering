import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent {

  @Output() collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  showSettings: boolean = false;

  collapsed = true;
  
  menuButtons = [
    { icon: 'circle-plus', label: 'New chat', action: () => this.navigateTo('westlaw-prototype/new-research') },
    { icon: 'message-dots', label: 'Current chat' },
    { icon: 'clock-rotate-left', label: 'History' },
    { icon: 'books', label: 'Browse' },
    { icon: 'folders', label: 'Folders' },
    { icon: 'grid-2', label: 'More tools' }
  ];

  bottomButtons = [
    { icon: 'stopwatch', label: 'Client: 345343' },
    { icon: 'square-sliders', label: 'Settings', action: () =>  this.toggleSettings() },
    { icon: 'circle-question', label: 'Help' },
    { icon: 'circle-user', label: 'Account' }
  ];

  selectedFontSize: number = 2;
  selectedMode: number = 1;
  activeMenu: string = 'New chat';

  constructor(private router: Router, private location: Location) {
    this.router.events
          .pipe(
            filter(event => event instanceof NavigationEnd)
          ).subscribe(() => {
            const urls = this.location.path().split('/').filter(Boolean);
            this.activeMenu = (urls.includes('deep-research') || urls.includes('keyword-search') || urls.includes('case-details')) ? 'Current chat' : 'New chat';
          });
  }

  toggleNav() {
    this.collapsed = !this.collapsed;
    this.collapseChanged.emit(this.collapsed);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
    if(this.showSettings) {
      this.activeMenu = 'Settings';
    } else {
      const urls = this.location.path().split('/').filter(Boolean);
      this.activeMenu = (urls.includes('deep-research') || urls.includes('keyword-search') || urls.includes('case-details')) ? 'Current chat' : 'New chat';
    }
  }

}
