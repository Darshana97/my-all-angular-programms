import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-blinding';
  public greeting = "";
  public greeting2 = "";

  onClick(){
    console.log("Welcome Darshana Senevirathna");
    this.greeting = "Welcome back Achi";
  }

}
