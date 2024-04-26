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
      products.sparePart5,
      products.sparePart4,
      products.sparePart3,
      products.sparePart2,
      products.sparePart1,
      products.sparePart10,
      products.sparePart5,
    ],
    mainImage: products.sparePart6,
    name: 'KIT CORREA DE TIEMPO',
    brand: 'GENERAL MOTORS',
    price: '175.00',
    details: {
      'SKU':'KROGGM93746917',
      'No. de Parte': '93746917',
      'Compra Máxima': '1 unidad'
    },
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
