import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoxOfDonutsComponent } from './box-of-donuts/box-of-donuts.component';
import { DonutComponent } from './box-of-donuts/donut/donut.component';

@NgModule({
  declarations: [AppComponent, BoxOfDonutsComponent, DonutComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
