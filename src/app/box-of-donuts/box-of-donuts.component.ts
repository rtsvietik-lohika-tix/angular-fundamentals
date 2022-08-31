import { Component, Input } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  templateUrl: './box-of-donuts.component.html',
})
export class BoxOfDonutsComponent {
  donuTTT: Donut = { name: 'Chocolate' };

  @Input() size: number;
}
