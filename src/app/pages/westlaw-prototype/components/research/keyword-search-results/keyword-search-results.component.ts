import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { KeywordSearchResult } from '../../../models/keyword-results';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keyword-search-results',
  templateUrl: './keyword-search-results.component.html',
  styleUrls: ['./keyword-search-results.component.less']
})
export class KeywordSearchResultsComponent {

  contentTypes: string[] = ['Cases', 'All', 'Articles', 'Blogs', 'News'];
  selectedContentType = 'Cases';

  @ViewChild('keywordElement') keywordElement!: ElementRef<HTMLSpanElement>;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngAfterViewInit() {
    this.results.forEach(result => {
      result.snippets = result.snippets.map(snippet => this.replaceKeywordInText(snippet));
    });

    this.cdr.detectChanges();
  }


  keyword: string = 'Performance improvement plan';

  results: KeywordSearchResult[] = [
    {
      title: 'Gorman v. Covidien, LLC',
      subtitle: 'United States District Court, S.D. New York.  •  November 19, 2015   •   146 F.Supp.3d 509  •  32 A.D. Cases 902',
      summary: 'The PIP was not an adverse action under the New York State Human Rights Law (NYSHRL) because it did not materially change the terms of employment. The PIP merely provided a framework for performance improvement without altering job responsibilities or conditions significantly. The decision was based on the lack of substantial change in employment status or responsibilities.',
      snippets: [
        'While Coaching Plans and [] accomplish similar goals, a [] is more formal...',
        'Covidien has sevreral means of addressing employee performance or behavior that fails to meet company policies and expectations, including written warnings, "Coaching Plans," and " claims derivative of []."...',
        'Where an employee\'s shortcomings include both behavioral and performance performance-related components, Covidien may implement either a Coaching Plan or a [] to help bring the employee...',
      ]
    },
    {
      title: 'Brown v. American Golf Corp.',
      subtitle: 'United States Court of Appeals, Second Circuit.  •  June 02, 2004    •   99 Fed.Appx. 341  •  2004 WL 1202012',
      summary: 'The PIP was not an adverse employment action under Title VII. The PIP did not materially alter employment terms, as it required attending seminars and implementing certain practices, which were not significantly disruptive. Consequently, the court upheld the decision, concluding that the employee failed to establish a prima facie case of retaliation.',
      snippets: [
        'Brown\s claim that being placed on the [] constituted retaliation in violation of Title VII fails at the prima facie stage because being placed on a [] was not an adverse employment...',
        'We conclude that being instructed to follow the requirements of the [] did not constitute an...'
      ]
    }
  ];

  replaceKeywordInText(text: string): string {
    if (this.keywordElement) {
      const keyword = this.keywordElement.nativeElement;
      return text.split('[]').join(keyword.outerHTML);
    }
    return text;
  }

  redirectToCaseDetails() {
    this.router.navigate(['/westlaw-prototype/case-details']);
  } 

}
