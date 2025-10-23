import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lords } from './lords';

describe('Lords', () => {
  let component: Lords;
  let fixture: ComponentFixture<Lords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
