import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSearchResultsComponentv2 } from './keyword-search-results.component';

describe('KeywordSearchResultsComponent', () => {
  let component: KeywordSearchResultsComponentv2;
  let fixture: ComponentFixture<KeywordSearchResultsComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordSearchResultsComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordSearchResultsComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
