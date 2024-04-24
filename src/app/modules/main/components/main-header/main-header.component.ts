import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { mainData } from '../../models/main.data';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  /**
   * Data cableada
   */
  mainData = mainData

  /**
   * Indica si el menú de filtros está expandido
   */
  filtersExpanded: boolean = true

  @Input() sidenavOpen: boolean = false

  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  @Output() resizeEvent: EventEmitter<any> = new EventEmitter()

  @HostListener('window:resize')
  onResize(e: any) {
    //* Oculto el menú en tamaños pequeños
    if (window.innerWidth <= 567) {

      this.filtersExpanded = false

    }
  }

  ngOnInit() {

    //* Oculto el menú en tamaños pequeños
    if (window.innerWidth <= 567) {

      this.filtersExpanded = false

    }

  }

  /**
   * Toggle de los filtros
   */
  changeFilterSize() {
    this.filtersExpanded = !this.filtersExpanded
  }

}
