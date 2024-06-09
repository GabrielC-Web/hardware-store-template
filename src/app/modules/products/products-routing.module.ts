import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsDetailLayoutComponent } from './pages/products-detail-layout/products-detail-layout.component';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent
  },
  {
    path: 'Detalle',
    component: ProductsDetailLayoutComponent
  },
  {
    path: 'Carrito',
    component: ProductsOverviewLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
