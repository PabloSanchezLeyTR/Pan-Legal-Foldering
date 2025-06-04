import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCheckComponentv2 } from './quick-check.component';

describe('QuickCheckComponentv2', () => {
  let component: QuickCheckComponentv2;
  let fixture: ComponentFixture<QuickCheckComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickCheckComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickCheckComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
