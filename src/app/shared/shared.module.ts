import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], exports: [
    SideNavComponent,
  ]
})
export class SharedModule { }
