import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { DarkmodeButton } from './darkmode-button/darkmode-button'
import { Footer } from './footer/footer'
@Component({
  selector: 'app-root',
  standalone: true ,
  imports: [RouterOutlet,Header,DarkmodeButton,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
