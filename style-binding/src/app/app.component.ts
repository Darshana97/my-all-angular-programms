import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-binding';
  public hasError = false;
  public isSpecial = true;
  public highliteColor = "orange";

  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }

}
