import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  visible = true;


  openBurguer() {  
    this.visible = !this.visible;
    console.log(this.visible)
  }
  
}
