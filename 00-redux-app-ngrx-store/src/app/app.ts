import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 10;
  }

  incrementar = () => {
    this.contador++;
  }

  decrementar = () => {
    this.contador--;
  }

}
