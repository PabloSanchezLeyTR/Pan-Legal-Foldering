import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent {

  @Output() collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  collapsed = false;
  
  menuButtons = [
    { icon: 'fa-circle-plus', label: 'New chat' },
    { icon: 'fa-message-dots', label: 'Current Chat' },
    { icon: 'fa-clock-rotate-left', label: 'History' },
    { icon: 'contact_mail', label: 'Browse' },
    { icon: 'contact_mail', label: 'Folders' },
    { icon: 'contact_mail', label: 'More tools' }
  ];

  bottomButtons = [
    { icon: 'fa-stopwatch', label: 'Client: 345343' },
    { icon: 'fa-circle-question', label: 'Help' },
    { icon: 'fa-circle-user', label: 'Account' }
  ];

  toggleNav() {
    this.collapsed = !this.collapsed;
    this.collapseChanged.emit(this.collapsed);
  }



}
