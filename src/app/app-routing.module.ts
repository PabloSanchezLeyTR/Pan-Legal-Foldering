import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';

const routes: Routes = [
  { path: 'research-history', component: ResearchHistoryComponent },
  { path: 'my-research', component: MyResearchComponent},
  {path: '404', component: ResearchHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
