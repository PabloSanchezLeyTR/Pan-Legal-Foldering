import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ReportComponentv2 } from './report.component';

describe('reportComponent', () => {
  let component:ReportComponentv2;
  let fixture: ComponentFixture<ReportComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
