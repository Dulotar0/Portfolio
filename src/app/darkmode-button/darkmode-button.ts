import { Component, ɵɵngDeclareNgModule } from '@angular/core';

@Component({
  selector: 'app-darkmode-button',
  imports: [],
  templateUrl: './darkmode-button.html',
  styleUrl: './darkmode-button.scss'
})
export class DarkmodeButton {
  darkmode(){
    let darkmode = localStorage.getItem('darkmode')
    const darkModeButton = document.getElementById("darkModeButton")

    if (darkmode === 'active') {
    disableDarkmode();
  } else {
    enableDarkmode();
  }
  }
}
function disableDarkmode(){
  document.body.classList.remove( 'darkmode' );
  localStorage.removeItem('darkmode');
}
function enableDarkmode(){
  document.body.classList.add( 'darkmode' );
  localStorage.setItem('darkmode', 'active');
} 