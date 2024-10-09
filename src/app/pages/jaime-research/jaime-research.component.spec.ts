import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaimeResearchComponent } from './jaime-research.component';

describe('JaimeResearchComponent', () => {
  let component: JaimeResearchComponent;
  let fixture: ComponentFixture<JaimeResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaimeResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaimeResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
