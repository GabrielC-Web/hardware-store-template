import { Component, EventEmitter, Output } from '@angular/core';
import { mainData } from '../../models/main.data';
import { icons, products } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-sidenav-menu',
  templateUrl: './main-sidenav-menu.component.html',
  styleUrls: ['./main-sidenav-menu.component.scss']
})
export class MainSidenavMenuComponent {

  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter()

  icons = icons

  categorieTypes = mainData.productsModule.sidenav.categorieTypes

  /**
   * Producto seleccionado
   */
  productSelected: any

  /**
   * Data del carrusel
   */
  carouselData: any[] = [
    {
      image: products.sparePart1,
      originalPrice: 'Ref $76',
      discountPrice: 'Ref $66'
    },
    {
      image: products.sparePart2,
      originalPrice: 'Ref $76',
      discountPrice: 'Ref $66'
    },
    {
      image: products.sparePart3,
      originalPrice: 'Ref $76',
      discountPrice: 'Ref $66'
    },
  ]

  currentProduct: any

  constructor() { }

  ngOnInit() {


    //* Por defecto el producto que se muestra es el primero
    this.currentProduct = this.carouselData[0]

    const myCarousel = document.getElementById('carousel')
    myCarousel?.addEventListener('slid.bs.carousel', (event: any) => {

      this.currentProduct = this.carouselData[event.to]

    })

  }

  /**
   * Funcion para seleccionar el siguiente elemento del carrucel
   */
  nextElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.carouselData.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = ++this.productSelected;
    if (nextImg > last) {
      this.selectTemplate(0);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion para seleccionar el anterior elemento del carrucel
   */
  prevElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.carouselData.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = this.productSelected - 1;
    if (nextImg < 0) {
      this.selectTemplate(last);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion que selescciona el Templateo que se muestra en detalle segun la imagen que se seleccione
   * @param idImg
   */
  selectTemplate(idImg: number) {

    // Guardo el id de la imagen seleccionada
    this.productSelected = idImg;

  }

  getCurrentProduct(product: any) {

    console.log(product);

  }

}
