import { Component } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images: any[] = [
    products.sparePart9
  ]

  popularProducts: any[] = [
    {
        img: products.sparePart1,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart2,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart3,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart4,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart5,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart6,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart7,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
    {
        img: products.sparePart8,
        productName: 'GENERAL MOTORS',
        brandName: 'Refrigerante Dex Cool Importado',
        originalPrice: 'Ref.23.00',
        discountPrice: 'Ref.22.00'
    },
  ]

  bigBottomAd = products.sparePart10

}
