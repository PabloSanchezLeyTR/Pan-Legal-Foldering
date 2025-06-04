import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { NgbAlertModule, NgbDatepickerModule, NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { HomeComponent } from './pages/westlaw-prototype/components/home/home.component';
import { SidenavComponent } from './pages/westlaw-prototype/components/sidenav/sidenav.component';
import { ButtonComponent } from './pages/westlaw-prototype/components/common/button/button.component';
import { SelectComponent } from './pages/westlaw-prototype/components/common/select/select.component';
import { FooterComponent } from './pages/westlaw-prototype/components/footer/footer.component';
import { NewResearchComponent } from './pages/westlaw-prototype/components/research/new-research/new-research.component';
import { SearchBarComponent } from './pages/westlaw-prototype/components/common/search-bar/search-bar.component';
import { ToggleComponent } from './pages/westlaw-prototype/components/common/toggle/toggle.component';
import { ResponseTimeMenuComponent } from './pages/westlaw-prototype/components/common/search-bar/response-time-menu/response-time-menu.component';
import { KeywordSearchResultsComponent } from './pages/westlaw-prototype/components/research/keyword-search-results/keyword-search-results.component';
import { DeepResearchConfirmationComponent } from './pages/westlaw-prototype/components/research/deep-research-confirmation/deep-research-confirmation.component';
import { DeepResearchResultComponent } from './pages/westlaw-prototype/components/research/deep-research-result/deep-research-result.component';
import { CaseDetailsComponent } from './pages/westlaw-prototype/components/research/case-details/case-details.component';
import { LoadingStateBarsComponent } from './pages/westlaw-prototype/components/research/deep-research-result/loading-state-bars/loading-state-bars.component';
import { ClarifyingQuestionsComponent } from './pages/westlaw-prototype/components/research/deep-research-result/clarifiying-questions/clarifiying-questions.component';
import { SourcesComponent } from './pages/westlaw-prototype/components/research/deep-research-result/sources/sources.component';
import { NotesComponent } from './pages/westlaw-prototype/components/research/deep-research-result/notes/notes.component';
import { QuickCheckComponent } from './pages/westlaw-prototype/components/research/quick-check/quick-check.component';
import { BookmarksComponent } from './pages/westlaw-prototype/components/bookmarks/bookmarks.component';
import { DeepResearchMenuComponent } from './pages/westlaw-prototype/components/common/search-bar/deep-research-menu/deep-research-menu.component';
import { PlanTasksComponent } from './pages/westlaw-prototype/components/research/deep-research-result/plan-tasks/plan-tasks.component';
import { PlanTasksComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/plan-tasks/plan-tasks.component';
import { KeywordSearchResultsComponentv2 } from './pages/westlaw-prototype/components/researchv2/keyword-search-results/keyword-search-results.component';
import { DeepResearchConfirmationComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-confirmation/deep-research-confirmation.component';
import { DeepResearchResultComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv2 } from './pages/westlaw-prototype/components/researchv2/case-details/case-details.component';
import { LoadingStateBarsComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/loading-state-bars/loading-state-bars.component';
import { ClarifyingQuestionsComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/clarifiying-questions/clarifiying-questions.component';
import { SourcesComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/sources/sources.component';
import { NotesComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/notes/notes.component'; // Verify this path exists or correct it
import { QuickCheckComponentv2 } from './pages/westlaw-prototype/components/researchv2/quick-check/quick-check.component';
import { NewResearchComponentv2 } from './pages/westlaw-prototype/components/researchv2/new-research/new-research.component';
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    MyResearchComponent,
    ResearchHistoryComponent,
    WijmoDemoComponent,
    HomeComponent,
    SidenavComponent,
    ButtonComponent,
    SelectComponent,
    FooterComponent,
    NewResearchComponent,
    NewResearchComponentv2,
    SearchBarComponent,
    ToggleComponent,
    ResponseTimeMenuComponent,
    KeywordSearchResultsComponent,
    DeepResearchConfirmationComponent,
    DeepResearchResultComponent,
    CaseDetailsComponent,
    LoadingStateBarsComponent,
    ClarifyingQuestionsComponent,
    PlanTasksComponent,
    SourcesComponent,
    NotesComponent,
    QuickCheckComponent,
    BookmarksComponent,
    DeepResearchMenuComponent,
    PlanTasksComponentv2,
    KeywordSearchResultsComponentv2,
    DeepResearchConfirmationComponentv2,
    DeepResearchResultComponentv2,
    CaseDetailsComponentv2,
    LoadingStateBarsComponentv2,
    ClarifyingQuestionsComponentv2,
    SourcesComponentv2,
    NotesComponentv2,
    QuickCheckComponentv2,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgbDatepickerModule,
    NgbAlertModule,
    NgbPopoverModule,
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
