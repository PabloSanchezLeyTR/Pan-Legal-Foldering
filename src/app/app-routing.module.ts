import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';
import { HomeComponent } from './pages/westlaw-prototype/components/home/home.component';
import { NewResearchComponent } from './pages/westlaw-prototype/components/research/new-research/new-research.component';
import { DeepResearchConfirmationComponent } from './pages/westlaw-prototype/components/research/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponent } from './pages/westlaw-prototype/components/research/keyword-search-results/keyword-search-results.component';

const routes: Routes = [
  { path: 'app-jaime-research', component: WijmoDemoComponent},
  { path: 'research-history', component: ResearchHistoryComponent },
  { path: 'my-research', component: MyResearchComponent},
  { path: 'westlaw-prototype', component: HomeComponent, children: [
    {
      path: 'new-research',
      component: NewResearchComponent
    },
    {
      path: 'deep-research/research-confirmation',
      component: DeepResearchConfirmationComponent
    },
    {
      path: 'keyword-search',
      component: KeywordSearchResultsComponent
    }
  ]},
  {path: '404', component: WijmoDemoComponent},
  { path: '**', component: WijmoDemoComponent },
  { path: '', component: WijmoDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
