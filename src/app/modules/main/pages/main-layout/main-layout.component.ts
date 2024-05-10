import { Component, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomSpecialFiltersConfig } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  /**
     * Indica si el sidenav está abierto
     */
  sidenavOpen: boolean = false

  /**
   * Ruta actual en la que estoy
   */
  currentRoute: string = ''

  /**
   * Indica si debo poner el layout en modo responsive
   */
  smallMode: boolean = false

  /**
   * Espacio que se le dará al anuncio superior
   */
  headerAppSpace: number = 0

  /**
   * Indica si debo mostrar el anuncio de arriba
   */
  showTopAnnouce: boolean = false

  /**
   * Indica si estoy en la vista de productos
   */
  productsViewMode: boolean = false

  /**
   * Veo si estoy en la vista de productos
   */
  inProductsView: boolean = false

  /**
   * Configuración de los filtros
   */
  filtersConfig: CmmEcomSpecialFiltersConfig = {
    text: 'BUSCA TU VEHÍCULO',
    buttonText: 'Ir',
    bgClass: 'gray_bg',
    filters: [
      'MARCA',
      'MODELO',
      'AÑO',
      'VERSIÓN',
    ]
  }

  @HostListener('window:resize')
  onResize(e: Event) {

    if (window.innerWidth <= 1200) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

    this.checkProductsViewMode()

  }

  @HostListener('window:scroll')
  onScroll(e: Event) {

    // console.log(e);

    // console.log(window.scrollY);

  }

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

    if (window.innerWidth <= 1200) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

    this.currentRoute = location.href
    this.listenRouteChanges()

    if (this.showTopAnnouce) {
      this.headerAppSpace = 60
    }

  }

  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.currentRoute = location.href

      this.sidenavOpen = false

      this.checkProductsViewMode()

    })

  }

  checkProductsViewMode() {
    //* Veo si estoy en la vista de productos
    this.productsViewMode = location.pathname == '/products' && window.innerWidth > 992

    this.inProductsView = location.pathname == '/products'

  }


}
