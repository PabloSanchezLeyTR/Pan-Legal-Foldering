import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deep-research-menu',
  templateUrl: './deep-research-menu.component.html',
  styleUrls: ['./deep-research-menu.component.less']
})
export class DeepResearchMenuComponent {
  
  @Output() searchTypeChanged: EventEmitter<number> = new EventEmitter<number>();

  searchType: number = 1;

  toggleDeepResearchType(){
    this.searchTypeChanged.emit(this.searchType);
  }
}
