import { Component, Input } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  products: any[] = mainData.productsModule.products.items

  @Input() showPaginator: boolean = true

  @Input() imageSize: { width: string, height: string } = { width: '100%', height: '100%' }

}
