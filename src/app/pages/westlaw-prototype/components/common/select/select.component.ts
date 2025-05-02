import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {

  @Input() options: string[] = [];
  @Input() label: string = '';
  selectedValue!: string;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if (this.options && this.options.length > 0) {
      this.selectedValue = this.options[0];
    }
    this.cdr.detectChanges();
  }
}
