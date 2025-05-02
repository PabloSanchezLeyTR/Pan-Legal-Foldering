import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStateBarsComponent } from './loading-state-bars.component';

describe('LoadingStateBarsComponent', () => {
  let component: LoadingStateBarsComponent;
  let fixture: ComponentFixture<LoadingStateBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingStateBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingStateBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
