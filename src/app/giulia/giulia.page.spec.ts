import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiuliaPage } from './giulia.page';

describe('GiuliaPage', () => {
  let component: GiuliaPage;
  let fixture: ComponentFixture<GiuliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiuliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
