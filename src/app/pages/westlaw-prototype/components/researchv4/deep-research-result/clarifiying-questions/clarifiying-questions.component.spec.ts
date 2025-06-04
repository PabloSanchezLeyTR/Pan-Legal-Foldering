import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarifyingQuestionsComponentv2 } from './clarifiying-questions.component';

describe('ClarifyingQuestionsComponent', () => {
  let component: ClarifyingQuestionsComponentv2;
  let fixture: ComponentFixture<ClarifyingQuestionsComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarifyingQuestionsComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarifyingQuestionsComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
