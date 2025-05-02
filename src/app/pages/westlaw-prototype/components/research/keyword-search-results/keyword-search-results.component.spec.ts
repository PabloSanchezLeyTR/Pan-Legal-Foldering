import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSearchResultsComponent } from './keyword-search-results.component';

describe('KeywordSearchResultsComponent', () => {
  let component: KeywordSearchResultsComponent;
  let fixture: ComponentFixture<KeywordSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordSearchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
