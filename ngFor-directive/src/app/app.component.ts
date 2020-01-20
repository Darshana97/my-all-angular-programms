import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor-directive';

  public colors = ["red","blue","green"];
  public countries = ["SL","USA","UK"];
  public vehicles = ["car","jeep","van"];

}
