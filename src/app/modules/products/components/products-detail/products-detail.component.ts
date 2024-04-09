import { Component, Input } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  @Input() product = {
    images: [
      products.sparePart6,
      products.sparePart7,
      products.sparePart8,
    ],
    mainImage: products.sparePart6,
    name: 'KIT CORREA DE TIEMPO',
    brand: 'GENERAL MOTORS',
    price: '175.00',
    sku: 'KROGGM93746917',
    partNumber: '93746917',
    maximunPurchase: 1,
    quantity: 1,
    description: 'Repuesto Original General Motors',
    aditionalDetails: {
      size: 'Dimensiones 9x30x9cm3',
      weight: '0,9 kg.',
      applicationModels: [
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 5 PUERTAS',
      ]
    }
  }

}
