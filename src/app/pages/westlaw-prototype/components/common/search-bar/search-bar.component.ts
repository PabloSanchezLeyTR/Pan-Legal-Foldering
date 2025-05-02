import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {

  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;


  constructor(private renderer: Renderer2) {
    this.renderer.listen('document', 'click', (event: Event) => {
      this.onDocumentClick(event);
    });
  }


  inputContent: string = '';

  toggleOptions: ToggleOption[] = [
    {
      label: 'Keyword Search',
      textColor: 'blue',
    },
    {
      label: 'Deep Research',
      icon: 'telescope',
      textColor: 'blue',
      includeDropdown: true,
    }
  ];

  showResponseTimeMenu: boolean = false;

  inputChanged(event: Event) {
    const input = event.target as HTMLDivElement;
    this.inputContent = input.innerText;
  }

  toggleOptionSelected(option: ToggleOption) {
    if (option.label === 'Deep Research') {
      setTimeout(() => {this.showResponseTimeMenu = true});
    }
  }


  onDocumentClick(event: any) {
    if (!this.responseTimeMenu.nativeElement.contains(event.target)) {
      if (this.showResponseTimeMenu) {
        this.showResponseTimeMenu = false;
      }
    }
  }

}
