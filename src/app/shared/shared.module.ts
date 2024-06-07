import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchFilterPipe } from '../pages/research-history/search-filter.pipe';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    SideNavComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SideNavComponent,
    SearchFilterPipe
  ]
})
export class SharedModule { }
