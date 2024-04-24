import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmp-main-sidenav-menu',
  templateUrl: './main-sidenav-menu.component.html',
  styleUrls: ['./main-sidenav-menu.component.scss']
})
export class MainSidenavMenuComponent {

  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter()

}
