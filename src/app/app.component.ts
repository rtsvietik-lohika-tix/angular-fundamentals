import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="2"></app-box-of-donuts>
    <!-- <button (click)="onSave($event)">Click me</button> -->
  `,
})
export class AppComponent {
  // onSave(event: 'mouseevent') {
  //   console.log('clicked');
  // }
}
