import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepResearchConfirmationComponent } from './deep-research-confirmation.component';

describe('DeepResearchConfirmationComponent', () => {
  let component: DeepResearchConfirmationComponent;
  let fixture: ComponentFixture<DeepResearchConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepResearchConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepResearchConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
