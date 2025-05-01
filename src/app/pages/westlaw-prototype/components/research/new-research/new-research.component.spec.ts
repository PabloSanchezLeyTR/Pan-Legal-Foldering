import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResearchComponent } from './new-research.component';

describe('NewResearchComponent', () => {
  let component: NewResearchComponent;
  let fixture: ComponentFixture<NewResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
