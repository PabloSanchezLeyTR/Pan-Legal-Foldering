import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepResearchMenuComponent } from './deep-research-menu.component';

describe('DeepResearchMenuComponent', () => {
  let component: DeepResearchMenuComponent;
  let fixture: ComponentFixture<DeepResearchMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepResearchMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepResearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
