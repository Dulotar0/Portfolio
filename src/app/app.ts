import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

import { DarkmodeButton } from './darkmode-button/darkmode-button'
import { Header } from './header/header';
import { Presentation } from './body/presentation/presentation';
import { Footer } from './footer/footer'


@Component({
  selector: 'app-root',
  standalone: true ,
  imports: [RouterOutlet, Header, DarkmodeButton, Footer, Presentation],
  providers: [DeviceDetectorService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
