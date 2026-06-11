import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompont } from './input.compont';

describe('InputCompont', () => {
  let component: InputCompont;
  let fixture: ComponentFixture<InputCompont>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCompont],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCompont);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
