import { Component, ElementRef, NgZone, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ResearchHistoryItem } from 'src/app/shared/interfaces/research-history';
import { ResearchHistoryClass } from 'src/app/shared/model/research-historyClass';

@Component({
  selector: 'app-research-history',
  templateUrl: './research-history.component.html',
  styleUrls: ['./research-history.component.less']
})
export class ResearchHistoryComponent {

  open: boolean = false;
  model: NgbDateStruct | undefined;

  @ViewChild('menu', { static: false }) menu: any;
  @ViewChild('trigger', { static: false }) trigger: any;
  @ViewChildren("searchInput") searchInput!: QueryList<ElementRef>; // Initialize the searchInput property

  items = [
    { text: 'Menu item 1', id: 'menu_item_1' },
    { text: 'Menu item 2', id: 'menu_item_2' },
    { text: 'Menu item 3', id: 'menu_item_3' },
  ];

  chipSearch: { chiplabel: string }[] = [];

  filtered: Object[] = [];

  searchText!: string;

  alert = false;
  alertType = 'success';
  previousAnnouncement = false;
  dtePickermessage: string = '';
  monthSelected : string = ''

  researhHistoryItems: ResearchHistoryItem[] = [
    new ResearchHistoryClass(1, "magnifying-glass", "Search", "Husky intern eletronics (76)", "Plain language", "Cases", "All State & Federal", "March 01, 2024 at 07:36 AM", "Client A", "", [ { id: 1, chiplabel: "Chip 1" }, { id: 2, chiplabel: "Chip 2" }, { id: 3, chiplabel: "Chip 3" } ]),
    new ResearchHistoryClass(1, "file-lines", "Document view", "TEC Olmos, LLC v. ConocoPhilips Company", "", "", "", "March 01, 2024 at 07:36 AM", "Client A", "Tex.App.-Hous.(1 Dist.)   •   May 31, 2018    •   555 S.W.3d 176", [ { id: 1, chiplabel: "Chip 1" }, { id: 2, chiplabel: "Chip 4" } ]),
  ];


  private triggerBtn: HTMLElement | null = null;
  clickOutsideHandler: any;

  constructor(private _ngZone: NgZone) {}

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

  search(e: any) {
    this.chipSearch.push({chiplabel: e.target._currentValue});
    this.searchText = e.target._currentValue;
    this.clearInput();
  }

  clearInput() {
    this.searchInput.first.nativeElement.value = '';
  }

  removeChip(e: any){
    this.chipSearch.splice(e,1);
    this.searchText = '';
  }

  onDateSelect(e: any) {
    console.log(this.model);
    console.log(e, 'testwww');
  }

  onNavigate(e: any){
    this.getMonthName(e.next.month);
    this.previousAnnouncement = false;
    this.dtePickermessage = this.monthSelected + ' ' + e.next.year + ' selected';
    const prevNextBtn = document.getElementsByClassName('ngb-dp-arrow');
    setTimeout(() => {
      for (let i = 0; i < prevNextBtn.length; i++) {
        prevNextBtn[i].querySelector('button')?.addEventListener('click', () => {
          this.previousAnnouncement = true;
       });
      }
    }, 0);
  }

   getMonthName(month: number): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (month < 1 || month > 12) {
        return "Invalid month number. Please enter a number between 1 and 12.";
    }
    this.monthSelected = months[month - 1];
    return this.monthSelected;
}

}
