import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {

  @Input() icon!: string;
  @Input() secondIcon!: string;
  @Input() iconColor: string = "";
  @Input() iconAppearance: string = "light";
  @Input() label!: string;
  @Input() expanded: boolean = true;
  @Input() color: string = "";
  @Input() backgroundColor: string = "";
  @Input() addBorder: boolean = false;
  @Input() includeDropdown: boolean | undefined = false;
  @Input() active: boolean | undefined = false;
  @Input() disabled: boolean | undefined = false;
  @Input() width!: string;
  @Input() height!: string;
  @Input() font!: string;
}
