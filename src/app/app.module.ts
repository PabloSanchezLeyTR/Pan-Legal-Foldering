import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { NgbAlertModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    MyResearchComponent,
    ResearchHistoryComponent,
    WijmoDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgbDatepickerModule,
    NgbAlertModule,
    FormsModule,
    JsonPipe,
    WjGridFilterModule,
    WjGridModule,
    WjInputModule,
    WjGridGrouppanelModule,
    WjGridSearchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
