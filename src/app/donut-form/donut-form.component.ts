import { Component } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-donut-form',
  template: ` <form #donutForm="ngForm">
    <input name="name" [(ngModel)]="donut.name" required />
    <input name="price" [(ngModel)]="donut.price" required />
    <p>Valid? {{ donutForm.valid }}</p>
    <pre>{{ donutForm | json }}</pre>
  </form>`,
})
export class DonutFormComponent {
  donut: Donut;
}
