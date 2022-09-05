import { Component, EventEmitter, Output } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-donut-wall',
  templateUrl: './donut-wall.component.html',
  styleUrls: ['./donut-wall.component.css'],
})
export class DonutWallComponent {
  @Output() selected = new EventEmitter<Donut>();
  @Output() remove = new EventEmitter<Donut>();
  @Output() edit = new EventEmitter<Donut>();

  donuts: Donut[] = [
    { name: 'cherry', icing: true, price: 25 },
    { name: 'strawberry', icing: true, price: 22 },
    { name: ' peach', icing: false, price: 27 },
  ];
}
