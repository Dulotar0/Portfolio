import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Header } from './header/header';

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
