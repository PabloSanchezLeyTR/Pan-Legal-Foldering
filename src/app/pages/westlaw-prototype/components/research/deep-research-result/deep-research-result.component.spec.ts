import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepResearchResultComponent } from './deep-research-result.component';

describe('DeepResearchResultComponent', () => {
  let component: DeepResearchResultComponent;
  let fixture: ComponentFixture<DeepResearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepResearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepResearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
