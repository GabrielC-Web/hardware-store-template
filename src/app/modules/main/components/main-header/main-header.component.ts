import { Component } from '@angular/core';
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

  ngOnInit() {

    //* Oculto el menú en tamaños pequeños
    if (window.innerWidth <= 567) {

      this.filtersExpanded = false

    }

  }

}
