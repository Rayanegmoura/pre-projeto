import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RyanPage } from './ryan.page';

describe('RyanPage', () => {
  let component: RyanPage;
  let fixture: ComponentFixture<RyanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RyanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
