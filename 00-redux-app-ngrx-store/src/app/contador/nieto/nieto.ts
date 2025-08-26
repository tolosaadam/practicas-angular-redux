import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: false,
  templateUrl: './nieto.html'
})
export class Nieto {
  @Input() contador!: number;
  @Output() cambioContador = new EventEmitter<number>();

  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}

