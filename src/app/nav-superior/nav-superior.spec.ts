import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSuperior } from './nav-superior';

describe('NavSuperior', () => {
  let component: NavSuperior;
  let fixture: ComponentFixture<NavSuperior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSuperior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSuperior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
