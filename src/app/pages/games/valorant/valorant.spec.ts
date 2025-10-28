import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valorant } from './valorant';

describe('Valorant', () => {
  let component: Valorant;
  let fixture: ComponentFixture<Valorant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valorant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valorant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
