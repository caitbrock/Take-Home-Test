import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoicmF0aW8tY2l0eSIsImEiOiJjbDlyYzNqcGswZjE5M3BxbWczOXphc2Z0In0.r2FFe1W7uSs_EGfv9wEu5g',
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
