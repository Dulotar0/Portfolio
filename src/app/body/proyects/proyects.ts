import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  imports: [],
  templateUrl: './proyects.html',
  styleUrl: './proyects.scss'
})
export class Proyects {
  toggleDisplay(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
    const lista = parent.querySelectorAll('.display_none');
    const readMore = parent.querySelectorAll('.readMore');

    lista.forEach((elemento) => {
      const el = elemento as HTMLElement;
      if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });

    readMore.forEach((elemento) => {
      const el = elemento as HTMLElement;
      if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  } else {
    console.warn('El elemento no tiene padre.');
  }
  }
}
