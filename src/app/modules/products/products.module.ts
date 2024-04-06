import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsPaginatorComponent } from './components/products-paginator/products-paginator.component';
import { ProdutcsSidenavComponent } from './components/produtcs-sidenav/produtcs-sidenav.component';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsGridComponent,
    ProductsPaginatorComponent,
    ProdutcsSidenavComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
