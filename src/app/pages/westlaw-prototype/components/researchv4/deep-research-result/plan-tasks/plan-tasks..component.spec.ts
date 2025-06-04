import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTasksComponentv2 } from './plan-tasks.component';

describe('PlanTasksComponent', () => {
  let component: PlanTasksComponentv2;
  let fixture: ComponentFixture<PlanTasksComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTasksComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanTasksComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
