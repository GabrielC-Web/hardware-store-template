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

}
