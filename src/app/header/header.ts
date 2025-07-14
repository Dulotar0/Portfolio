import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  visible = false;

  openBurguer() {  
    this.visible = !this.visible;
    console.log(this.visible)
  }
  
}
