import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallnotesComponent } from './callnotes.component';

describe('CallnotesComponent', () => {
  let component: CallnotesComponent;
  let fixture: ComponentFixture<CallnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
