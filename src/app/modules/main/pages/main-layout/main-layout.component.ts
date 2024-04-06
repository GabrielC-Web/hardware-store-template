import { Component } from '@angular/core';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  headerHeight: number = 0

  constructor() { }

  ngOnInit() {

    this.headerHeight = document.getElementById('header')?.offsetHeight as number

    console.log(this.headerHeight);

  }

  getMainData() {

  }

}
