import { Component } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';

@Component({
  selector: 'cmp-produtcs-sidenav',
  templateUrl: './produtcs-sidenav.component.html',
  styleUrls: ['./produtcs-sidenav.component.scss']
})
export class ProdutcsSidenavComponent {

  categorieTypes = mainData.productsModule.sidenav.categorieTypes

}
