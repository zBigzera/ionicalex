import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurguerPage } from './burguer.page';

describe('BurguerPage', () => {
  let component: BurguerPage;
  let fixture: ComponentFixture<BurguerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BurguerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
