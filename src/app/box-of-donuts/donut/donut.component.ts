import { Component, Input } from '@angular/core';
import { Donut } from 'src/app/models/donut.interface';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
})
export class DonutComponent {
  @Input() donut: Donut;

  icing: boolean = true;
}
