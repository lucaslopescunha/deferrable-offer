import { Component } from '@angular/core';
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  imports: [WelcomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
