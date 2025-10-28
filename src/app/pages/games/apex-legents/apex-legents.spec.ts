import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexLegents } from './apex-legents';

describe('ApexLegents', () => {
  let component: ApexLegents;
  let fixture: ComponentFixture<ApexLegents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexLegents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexLegents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
