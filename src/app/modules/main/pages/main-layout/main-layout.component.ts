import { Component, HostListener, Output } from '@angular/core';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  headerHeight: number = 0

  @HostListener('window:resize')
  onResize(e: any) {
    this.calculateHeaderSize()
  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.calculateHeaderSize()

  }

  /**
   * Calculo la altura del header
   */
  calculateHeaderSize() {
    this.headerHeight = document.getElementById('header')?.offsetHeight as number
    console.log(this.headerHeight);
  }

  getMainData() {

  }

}
