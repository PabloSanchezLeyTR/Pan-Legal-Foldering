import { Component, ViewChild } from '@angular/core';
import { MenuItemClass } from '../model/menuItemClass';
import { MenuItem } from '../interfaces/side-nav-menu-items';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent {

  open: boolean = false;

  @ViewChild('menu', { static: false }) menu: any;
  @ViewChild('trigger', { static: false }) trigger: any;

  private triggerBtn: HTMLElement | null = null;
  clickOutsideHandler: any;

  items = [
    { text: 'Virtual folder 1', id: 'menu_item_1' },
    { text: 'Virtual folder 2', id: 'menu_item_2' },
    { text: 'Virtual folder 3', id: 'menu_item_3' },
  ];

  menuItems: MenuItem[] = [
    new MenuItemClass(1, "house", "My Content", false, "my-research"),
    new MenuItemClass(2, "clock-rotate-left", "Research history", false, "research-history"),
    new MenuItemClass(3, "folder", "Jaime Research", false, "app-jaime-research"),
    new MenuItemClass(4, "folder", "My folders", true, ""),
    new MenuItemClass(5, "tag", "My Tags", false, ""),
    new MenuItemClass(6, "notes", "Annotations", false, ""),
    new MenuItemClass(7, "people-group", "Shared with me", false, ""),
    new MenuItemClass(8, "trash-can", "Recycle bin", false, ""),
  ];

  ngOnInit() {
    this.clickOutsideHandler = this.handleClickOutside.bind(this);
    document.addEventListener('click', this.clickOutsideHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.clickOutsideHandler);
  }

  ngAfterViewInit(): void {
    // Identify the button within chip as it is the focused element.
    this.triggerBtn =
      this.trigger.nativeElement.shadowRoot.querySelector('.control');
  }
  clickHandler() {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => {
        this.menu.nativeElement.focus();
      });
    }
  }

  closeMenu() {
    this.open = false;
    setTimeout(() => {
      this.triggerBtn?.focus();
    });
  }

  handleClickOutside(event: MouseEvent) {
    if (this.trigger.nativeElement.contains(event.target)) {
      // If the event target is the button itself, return immediately
      return;
    }

    if (this.open && !this.menu.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  handleMenuItemKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ' || e.shiftKey && e.key === 'Tab' || e.key === 'Tab' || e.key === 'Escape') {
        this.closeMenu();
    }
  }

  handleTriggerKeydown(e: KeyboardEvent) {
    // The menu can be opened by using the Down Arrow, Up Arrow, Enter key or the Spacebar.
    // https://trten.sharepoint.com/sites/intr-digital-accessibility-coe/SitePages/Dropdown---Actions-Menu.aspx#functional-requirements
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      this.open = true;
      setTimeout(() => {
        this.menu.nativeElement.focus();
      });
    }
  }

}
