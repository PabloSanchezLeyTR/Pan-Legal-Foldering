import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStateBarsComponentv2 } from './loading-state-bars.component';

describe('LoadingStateBarsComponent', () => {
  let component: LoadingStateBarsComponentv2;
  let fixture: ComponentFixture<LoadingStateBarsComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingStateBarsComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingStateBarsComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
