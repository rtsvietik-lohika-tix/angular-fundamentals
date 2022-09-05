import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="2" [name]="customerName"></app-box-of-donuts>
    <!-- <button (click)="onSave($event)">Click me</button> -->
    <app-donut-wall
      (selected)="onSelected($event)"
      (remove)="onRemove($event)"
      (edit)="onEdit($event)"
    ></app-donut-wall>

    <div class="customer-form">
      <label for="customer-name">Customer name </label>
      <input [(ngModel)]="customerName" id="customer-name" required />
    </div>

    <div class="donut-form" *ngIf="donutBeingEdited">
      <h4>Donut Kitchen</h4>
      <form #donutForm="ngForm" (ngSubmit)="onSubmit(donutForm)">
        <input name="name" [(ngModel)]="donutBeingEdited.name" required />
        <input name="price" [(ngModel)]="donutBeingEdited.price" required />
        <p>Valie? {{ donutForm.valid }}</p>
        <button type="submit">Submit</button>
      </form>

      <!-- <form [formGroup]="donutFormGroup" (ngSubmit)="onSubmit()">
        <input name="name" formControlName="name" />
        <input name="price" formControlName="price" />
        <p>Valie? {{ donutForm.valid }}</p>
        <button type="submit">Save</button>
      </form> -->
    </div>
  `,
  styles: [
    `
      .ng-valid {
        border: 1px solid green;
      }

      .ng-invalid {
        border: 1px solid red;
      }
    `,
  ],
})
export class AppComponent {
  // onSave(event: 'mouseevent') {
  //   console.log('clicked');
  // }

  customerName: string;
  donutBeingEdited: Donut;

  donutFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(10)]),
  });

  donut: Donut;
  donuts: Donut[] = [];
  name: string;

  onSelected(donut: Donut) {
    console.log('Selected ', donut);
    this.donuts = [...this.donuts, donut];
  }

  onRemove(donut: Donut) {
    console.log('removed: ', donut);
    const index = this.donuts.findIndex((d) => d.name === donut.name);
    if (index === -1) {
      return;
    }
    this.donuts.splice(index, 1);
  }

  onEdit(donut: Donut): void {
    this.donut = donut;
    this.donutFormGroup.patchValue(donut);
  }

  onSubmit(form: NgForm) {
    console.log(form.valid);
    console.log(form.value);
  }

  // onSubmit() {
  //   console.log(this.donutFormGroup.value);
  // }
}
