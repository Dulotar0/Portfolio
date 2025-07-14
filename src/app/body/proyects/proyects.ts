import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  imports: [],
  templateUrl: './proyects.html',
  styleUrl: './proyects.scss'
})
export class Proyects {
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
