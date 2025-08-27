import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html'
})
export class Hijo {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  ngOnInit(): void {

  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

}
