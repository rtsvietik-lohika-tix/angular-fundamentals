import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <<<<<<< HEAD
    <!--set the size of box -->
    <app-box-of-donuts
      style="border: 1px solid #000;"
      [size]="12"
    ></app-box-of-donuts>
  `,
})
export class AppComponent {}
