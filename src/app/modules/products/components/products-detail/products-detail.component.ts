import { Component, HostListener, Input } from '@angular/core';
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
      'SKU': 'KROGGM93746917',
      'No. de Parte': '93746917',
      'Compra Máxima': '1 unidad'
    },
    quantity: 1,
    description: {
      'Repuesto original de General Motors': '',
      'Dimensiones': 'Dimensiones 9x30x9cm3',
      'Modelos de aplicación': [
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 5 PUERTAS',
      ]
    }
  }

  /**
   * Indica si muestro la sombra
   */
  displayShadow: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    if (window.innerWidth <= 767) {
      this.displayShadow = true
    } else {
      this.displayShadow = false
    }

  }

  constructor() { }

  ngOnInit() {

    if (window.innerWidth <= 767) {
      this.displayShadow = true
    } else {
      this.displayShadow = false
    }

    console.log(this.displayShadow);

  }

}
