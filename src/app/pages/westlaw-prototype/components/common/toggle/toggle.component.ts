import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less']
})
export class ToggleComponent {

  @Input() options!: ToggleOption[];
  selectedOption!: ToggleOption | undefined;
  @Output() selectedOptionChanged: EventEmitter<ToggleOption> = new EventEmitter<ToggleOption>();

  ngAfterViewInit() {
    if (this.options && this.options.length > 0) {
      this.selectedOption = this.options[0];
    }
  }

  selectOption(option: ToggleOption) {
    this.selectedOption = option;
    this.selectedOptionChanged.emit(this.selectedOption);
  }

}
