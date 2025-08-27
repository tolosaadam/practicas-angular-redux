import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  standalone: false,
  templateUrl: './nieto.html'
})
export class Nieto {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(actions.resetear());
  }
}

