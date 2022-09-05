import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="2" [name]="customerName"></app-box-of-donuts>
    <!-- <button (click)="onSave($event)">Click me</button> -->
    <app-donut-wall
      (selected)="onSelected($event)"
      (remove)="onRemove($event)"
      (edit)="donutBeingEdited = $event"
    ></app-donut-wall>

    <div class="customer-form">
      <label for="customer-name">Customer name </label>
      <input [(ngModel)]="customerName" id="customer-name" />
    </div>

    <div class="donut-form" *ngIf="donutBeingEdited">
      <h4>Donut Kitchen</h4>
      <form #donutForm="ngForm">
        <input name="name" [(ngModel)]="donutBeingEdited.name" required />
        <input name="price" [(ngModel)]="donutBeingEdited.price" required />
        <p>Valie? {{ donutForm.valid }}</p>
      </form>
    </div>
  `,
})
export class AppComponent {
  // onSave(event: 'mouseevent') {
  //   console.log('clicked');
  // }

  customerName: string;
  donutBeingEdited: Donut;

  onSelected(donut: Donut) {
    console.log('Selected ', donut);
  }

  onRemove(donut: Donut) {
    console.log('removed: ', donut);
  }
}
