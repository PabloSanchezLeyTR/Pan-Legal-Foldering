import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResearchComponentv2 } from './new-research.component';

describe('NewResearchComponentv2', () => {
  let component: NewResearchComponentv2;
  let fixture: ComponentFixture<NewResearchComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResearchComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewResearchComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
