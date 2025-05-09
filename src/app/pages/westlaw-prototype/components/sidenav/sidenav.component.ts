import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent {

  @Output() collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  collapsed = false;

  constructor(private router: Router) { }
  
  menuButtons = [
    { icon: 'circle-plus', label: 'New chat', action: () => this.navigateTo('westlaw-prototype/new-research') },
    { icon: 'message-dots', label: 'Current Chat' },
    { icon: 'clock-rotate-left', label: 'History' },
    { icon: 'books', label: 'Browse' },
    { icon: 'folders', label: 'Folders' },
    { icon: 'grid-2', label: 'More tools' }
  ];

  bottomButtons = [
    { icon: 'stopwatch', label: 'Client: 345343' },
    { icon: 'circle-question', label: 'Help' },
    { icon: 'circle-user', label: 'Account' }
  ];

  toggleNav() {
    this.collapsed = !this.collapsed;
    this.collapseChanged.emit(this.collapsed);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }



}
