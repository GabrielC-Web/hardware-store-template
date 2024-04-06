import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcsSidenavComponent } from './produtcs-sidenav.component';

describe('ProdutcsSidenavComponent', () => {
  let component: ProdutcsSidenavComponent;
  let fixture: ComponentFixture<ProdutcsSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutcsSidenavComponent]
    });
    fixture = TestBed.createComponent(ProdutcsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
