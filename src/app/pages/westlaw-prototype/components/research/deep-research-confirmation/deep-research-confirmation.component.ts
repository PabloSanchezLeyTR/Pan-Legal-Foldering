import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deep-research-confirmation',
  templateUrl: './deep-research-confirmation.component.html',
  styleUrls: ['./deep-research-confirmation.component.less'],
})
export class DeepResearchConfirmationComponent {
  form = new FormGroup({
    longerTime: new FormControl<string | null>(null, Validators.required),
  });

  get longerTime() {
    return this.form.controls.longerTime.value;
  }

  onTimeChange(deepness: string | null) {
    this.form.controls.longerTime.setValue(deepness);
  }
}
