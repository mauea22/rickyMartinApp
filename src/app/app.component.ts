import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mauro Allena';

  cities = ['Barcelona', 'Madrid', 'Lima', 'Buenos Aires'];

  name!:string;

}
