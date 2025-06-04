import { ComponentFixture, TestBed } from '@angular/core/testing';

import {NotesComponentv2 } from './notes.component';

describe('NotesComponent', () => {
  let component:NotesComponentv2;
  let fixture: ComponentFixture<NotesComponentv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesComponentv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesComponentv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
