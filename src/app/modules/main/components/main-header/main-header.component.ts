import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { mainData } from '../../models/main.data';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  /**
   * Emite evento de abrir sidenav
   */
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Indica si el sidenav está abierto
   */
  @Input() sidenavOpen: boolean = false

  icons = icons

  logos = logos

  /**
   * Enlaces del menú de navegación
   */
  menuLinks: any[] = [
    {
      header: 'Todos',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Promociones',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Mantenimiento',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Exterior',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Motor',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Tren Motriz',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Eléctricas',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Refrigeración',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
    {
      header: 'Interior',
      items: [
        'Componentes',
        'Dirección',
        'Suspensión',
        'Transmisión',
        'Aceite'
      ]
    },
  ]

  /**
   * Toggle el sidenav
   */
  toggleSidenav() {

    this.sidenavOpen = !this.sidenavOpen

    this.openSidenav.emit(this.sidenavOpen)

  }

}
