import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar = () => {
    this.contador++;
  }

  decrementar = () => {
    this.contador--;
  }

}
