import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchHistoryComponent } from './research-history.component';

describe('ResearchHistoryComponent', () => {
  let component: ResearchHistoryComponent;
  let fixture: ComponentFixture<ResearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
