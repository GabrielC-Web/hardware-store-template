import { Component } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  productsList: any[] = [
    {
      image: products.sparePart1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: products.sparePart1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: products.sparePart1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

  constructor() { }

  ngOnInit() {

    console.log(this.prebill);


  }

}
