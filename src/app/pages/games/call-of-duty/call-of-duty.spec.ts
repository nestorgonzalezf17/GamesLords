import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOfDuty } from './call-of-duty';

describe('CallOfDuty', () => {
  let component: CallOfDuty;
  let fixture: ComponentFixture<CallOfDuty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallOfDuty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallOfDuty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
