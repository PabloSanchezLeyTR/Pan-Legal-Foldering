import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SourcesComponentv2 } from './sources.component';

describe('SourcesComponent', () => {
  let component:SourcesComponentv2;
  let fixture: ComponentFixture<SourcesComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourcesComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
