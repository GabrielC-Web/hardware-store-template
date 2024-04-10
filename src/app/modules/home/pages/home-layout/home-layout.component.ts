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

}
