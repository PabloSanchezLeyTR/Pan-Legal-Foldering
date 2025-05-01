import { Component } from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {

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

  inputChanged(event: Event) {
    const input = event.target as HTMLDivElement;
    this.inputContent = input.innerText;
  }
}
