import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncomendasPage } from './encomendas.page';

describe('EncomendasPage', () => {
  let component: EncomendasPage;
  let fixture: ComponentFixture<EncomendasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EncomendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
