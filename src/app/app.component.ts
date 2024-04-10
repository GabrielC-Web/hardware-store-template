import { Component } from '@angular/core';
import * as AOS from 'aos';
export const CC_PROJECT_INITIALS = 'f-template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {

  }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)

    document.documentElement.style.setProperty('--v-dynamic-primary', '#e81313');
    document.documentElement.style.setProperty('--v-dynamic-primary-selected', '#e81313');

  }

}
