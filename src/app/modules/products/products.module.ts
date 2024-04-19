import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsPaginatorComponent } from './components/products-paginator/products-paginator.component';
import { ProdutcsSidenavComponent } from './components/produtcs-sidenav/produtcs-sidenav.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsDetailLayoutComponent } from './pages/products-detail-layout/products-detail-layout.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsGridComponent,
    ProductsPaginatorComponent,
    ProdutcsSidenavComponent,
    ProductsDetailLayoutComponent,
    ProductsDetailComponent,
    ProductsOverviewLayoutComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    CoreModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
