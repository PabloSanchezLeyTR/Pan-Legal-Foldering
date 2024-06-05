import { Component } from '@angular/core';
import { SafButton, SafDivider, SafMenuItem, SafSideNav, SafTooltip } from '@saffron/core-components';

SafButton();
SafSideNav();
SafMenuItem();
SafTooltip();
SafDivider();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pan-legal-foldering';

}
