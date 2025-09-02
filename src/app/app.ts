import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Header } from './header/header';
import { Contact } from './contact/contact'

@Component({
  selector: 'app-root',
  standalone: true ,
  imports: [RouterOutlet, Header],
  providers: [DeviceDetectorService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
