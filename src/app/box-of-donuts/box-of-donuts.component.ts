import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Donut } from '../models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  templateUrl: './box-of-donuts.component.html',
  styleUrls: ['./box-of-donuts.component.css'],
})
export class BoxOfDonutsComponent implements OnChanges {
  @Input() size: number;

  donuTTT: Donut = { name: 'chocolate', icing: true, price: 28 };

  donuts: Donut[] = [
    { name: 'fruit', icing: true, price: 30 },
    { name: 'white сhocolote', icing: false, price: 35 },
  ];

  show = true;
  selectedDonut: Donut;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.donuts && changes.donuts.currentValue && this.isFull()) {
      console.log('oups');
    }
  }

  isFull(): boolean {
    return this.donuts && this.donuts.length === this.size;
  }
}
