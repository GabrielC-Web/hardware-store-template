import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent {

  @Input() products: any = []

  @Input() showPaginator: boolean = true

  @Input() imageSize: { width: string, height: string } = { width: '100%', height: '100%' }

}
