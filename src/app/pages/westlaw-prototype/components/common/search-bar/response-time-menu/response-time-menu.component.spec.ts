import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTimeMenuComponent } from './response-time-menu.component';

describe('ResponseTimeMenuComponent', () => {
  let component: ResponseTimeMenuComponent;
  let fixture: ComponentFixture<ResponseTimeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseTimeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseTimeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
