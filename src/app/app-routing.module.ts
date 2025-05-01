import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';
import { HomeComponent } from './pages/westlaw-prototype/components/home/home.component';
import { NewResearchComponent } from './pages/westlaw-prototype/components/research/new-research/new-research.component';

const routes: Routes = [
  { path: 'app-jaime-research', component: WijmoDemoComponent},
  { path: 'research-history', component: ResearchHistoryComponent },
  { path: 'my-research', component: MyResearchComponent},
  { path: 'westlaw-prototype', component: HomeComponent, children: [
    {
      path: 'new-research',
      component: NewResearchComponent
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
