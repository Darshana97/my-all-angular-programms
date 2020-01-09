import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-binding';
  public successClass = "text-succes";
  public hasError =true;

  public isSpecial = true;

  public messageClasses = {

    "text-succes":this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial


  }

}
