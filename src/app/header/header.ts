import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router'
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,Contact],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  visible = false;
  handleClick(event: MouseEvent) {
    const enlaces = document.querySelectorAll('a')
    enlaces.forEach(element => {
      element.classList.remove("activo")
    });

    const clickedElement = event.target as HTMLElement;
    clickedElement.classList.add("activo");
  }

  openBurguer() {
    this.visible = !this.visible;
    console.log(this.visible)
  }

  

  @HostListener('document:click', ['$event'])
  cerrarMenu(event: MouseEvent) {
  const menu = document.getElementById('list-container');
  const clickedElement = event.target as HTMLElement;

  // Comprueba si el clic fue dentro del menú
  const clicDentroMenu = menu?.contains(event.target as Node);

  // Comprueba si el clic fue dentro del botón burger o en el mismo botón
  const clicEnBurger = clickedElement.closest('.burguerButton') !== null;

  if (!clicDentroMenu && !clicEnBurger) {
    console.log('Clic fuera del menú y fuera del botón burger, cerrando...');
    // Aquí cierras el menú
    this.visible = false;
  } else {
    console.log('Clic dentro del menú o en el botón burger');
  }
}
}
