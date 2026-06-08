import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMultiplerole } from './character-multiplerole';

describe('CharacterMultiplerole', () => {
  let component: CharacterMultiplerole;
  let fixture: ComponentFixture<CharacterMultiplerole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMultiplerole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMultiplerole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
