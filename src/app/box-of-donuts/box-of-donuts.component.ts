import { Component, Input } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  templateUrl: './box-of-donuts.component.html',
  styleUrls: ['./box-of-donuts.component.css'],
})
export class BoxOfDonutsComponent {
  @Input() size: number;

  donuTTT: Donut = { name: 'Chocolate', icing: true };

  donuts: Donut[] = [
    { name: 'Fruit', icing: true },
    { name: 'White Chocolote', icing: false },
  ];

  show = true;
  selectedDonut: Donut;
}
