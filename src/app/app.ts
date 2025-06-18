import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { DarkmodeButton } from './darkmode-button/darkmode-button'
@Component({
  selector: 'app-root',
  standalone: true ,
  imports: [RouterOutlet,Header,DarkmodeButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
