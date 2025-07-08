import { Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { Proyects } from '../proyects/proyects';
import { About } from '../about/about';

@Component({
  selector: 'home',
  standalone: true ,
  imports: [Experience,About,Proyects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
