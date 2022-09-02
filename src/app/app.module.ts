import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoxOfDonutsComponent } from './box-of-donuts/box-of-donuts.component';
import { DonutComponent } from './box-of-donuts/donut/donut.component';
import { DonutWallComponent } from './donut-wall/donut-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    BoxOfDonutsComponent,
    DonutWallComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
