import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPokemon } from './api-pokemon';

describe('ApiPokemon', () => {
  let component: ApiPokemon;
  let fixture: ComponentFixture<ApiPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
