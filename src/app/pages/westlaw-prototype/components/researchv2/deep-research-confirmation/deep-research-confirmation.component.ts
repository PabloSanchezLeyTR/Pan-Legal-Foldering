import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deep-research-confirmation',
  templateUrl: './deep-research-confirmation.component.html',
  styleUrls: ['./deep-research-confirmation.component.less'],
})
export class DeepResearchConfirmationComponentv2 {
  form = new FormGroup({
    longerTime: new FormControl<string | null>('five'),
  });

  get longerTime() {
    return this.form.controls.longerTime.value;
  }

  onTimeChange(deepness: string | null) {
    this.form.controls.longerTime.setValue(deepness);
  }
}
