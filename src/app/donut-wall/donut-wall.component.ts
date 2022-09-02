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

  donuts: Donut[] = [
    { name: 'Cherry', icing: true },
    { name: 'Strawberry', icing: true },
    { name: 'Peach', icing: false },
  ];
}
