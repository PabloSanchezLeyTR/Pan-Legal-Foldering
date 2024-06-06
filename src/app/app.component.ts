import { Component } from '@angular/core';
import { SafAnchor, SafBadge, SafButton, SafCard, SafChip, SafDivider, SafIcon, SafMenuItem, SafSearchField, SafSideNav, SafTooltip } from '@saffron/core-components';

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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pan-legal-foldering';

}
