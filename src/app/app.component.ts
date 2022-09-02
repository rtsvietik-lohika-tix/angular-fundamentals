import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="2"></app-box-of-donuts>
    <!-- <button (click)="onSave($event)">Click me</button> -->
    <app-donut-wall
      (selected)="onSelected($event)"
      (remove)="onRemove($event)"
    ></app-donut-wall>
  `,
})
export class AppComponent {
  // onSave(event: 'mouseevent') {
  //   console.log('clicked');
  // }

  onSelected(donut: Donut) {
    console.log('Selected ', donut);
  }

  onRemove(donut: Donut) {
    console.log('removed: ', donut);
  }
}
