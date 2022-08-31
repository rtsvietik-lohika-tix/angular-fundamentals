import { Component, Input } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  templateUrl: './box-of-donuts.component.html',
})
export class BoxOfDonutsComponent {
  donuTTT: Donut = { name: 'Chocolate', icing: true };

  @Input() size: number;

  donuts: Donut[] = [
    { name: 'Fruit', icing: true },
    { name: 'White Chocolote', icing: false },
  ];
}
