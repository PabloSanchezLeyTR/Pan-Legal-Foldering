import { Component } from '@angular/core';
import { SafAlert, SafAnchor, SafBadge, SafButton, SafCard, SafChip, SafDivider, SafIcon, SafMenuItem, SafSearchField, SafSideNav, SafSrOnly, SafTooltip } from '@saffron/core-components';

SafButton();
SafSideNav();
SafMenuItem();
SafTooltip();
SafDivider();
SafSearchField();
SafIcon();
SafChip();
SafCard();
SafBadge();
SafAnchor();
SafAlert();
SafSrOnly();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pan-legal-foldering';

}
