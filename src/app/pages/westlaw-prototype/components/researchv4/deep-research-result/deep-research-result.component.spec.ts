import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepResearchResultComponentv2 } from './deep-research-result.component';

describe('DeepResearchResultComponent', () => {
  let component: DeepResearchResultComponentv2;
  let fixture: ComponentFixture<DeepResearchResultComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepResearchResultComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepResearchResultComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
