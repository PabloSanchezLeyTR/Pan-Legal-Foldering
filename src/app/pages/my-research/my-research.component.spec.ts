import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResearchComponent } from './my-research.component';

describe('MyResearchComponent', () => {
  let component: MyResearchComponent;
  let fixture: ComponentFixture<MyResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
