import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageComponent } from './page/page.component';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    SideNavComponent,
    PageComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    SideNavComponent,
    PageComponent
  ]
})
export class SharedModule { }
