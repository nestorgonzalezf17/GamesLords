import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimeRancher } from './slime-rancher';

describe('SlimeRancher', () => {
  let component: SlimeRancher;
  let fixture: ComponentFixture<SlimeRancher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlimeRancher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlimeRancher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
