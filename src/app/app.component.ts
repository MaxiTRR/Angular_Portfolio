import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioAngular';

  setMode = false;

  receiveMode(setDark:boolean){
    this.setMode = setDark;
    console.log(this.setMode)
  }
}
