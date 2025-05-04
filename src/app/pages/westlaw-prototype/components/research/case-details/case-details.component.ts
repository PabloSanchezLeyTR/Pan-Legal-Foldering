import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.less']
})
export class CaseDetailsComponent {

  constructor( private router: Router) { }

  goBack() {
    this.router.navigate(['westlaw-prototype/keyword-search']);
  }

}
