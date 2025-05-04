import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarifyingQuestionsComponent } from './clarifiying-questions.component';

describe('ClarifyingQuestionsComponent', () => {
  let component: ClarifyingQuestionsComponent;
  let fixture: ComponentFixture<ClarifyingQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarifyingQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarifyingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
