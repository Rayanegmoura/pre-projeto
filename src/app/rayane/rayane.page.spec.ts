import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RayanePage } from './rayane.page';

describe('RayanePage', () => {
  let component: RayanePage;
  let fixture: ComponentFixture<RayanePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RayanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
