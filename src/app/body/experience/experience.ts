import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
 toggleDisplay() {
    const lista = document.querySelectorAll('.display_none');
    const readMore = document.querySelectorAll('.readMore');

    lista.forEach((elemento) => {
      const el = elemento as HTMLElement;
      // Si está oculto, mostrarlo, sino ocultarlo
      if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
        el.style.display = 'block'; // o el valor adecuado
      } else {
        el.style.display = 'none';
      }
    });

    readMore.forEach((elemento) => {
      const el = elemento as HTMLElement;
      // Hacer lo inverso para el botón
      if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
        el.style.display = 'block'; // mostrar
      } else {
        el.style.display = 'none';  // ocultar
      }
    });
  }
}