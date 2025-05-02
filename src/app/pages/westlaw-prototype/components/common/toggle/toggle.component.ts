import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if (this.options && this.options.length > 0) {
      this.selectedOption = this.options[0];
    }
    this.cdr.detectChanges();
  }

  selectOption(option: ToggleOption) {
    this.selectedOption = option;
    this.selectedOptionChanged.emit(this.selectedOption);
  }

}
