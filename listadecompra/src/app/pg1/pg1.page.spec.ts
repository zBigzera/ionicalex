import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg1Page } from './pg1.page';

describe('Pg1Page', () => {
  let component: Pg1Page;
  let fixture: ComponentFixture<Pg1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
