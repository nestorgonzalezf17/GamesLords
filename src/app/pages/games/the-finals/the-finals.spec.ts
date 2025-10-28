import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFinals } from './the-finals';

describe('TheFinals', () => {
  let component: TheFinals;
  let fixture: ComponentFixture<TheFinals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheFinals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFinals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
