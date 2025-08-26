import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html'
})
export class Hijo {

  @Input() contador!: number;
  @Output() cambioContador = new EventEmitter<number>();

  ngOnInit() {

  }

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(event: number) {
    this.contador = event;
    this.cambioContador.emit(this.contador);
  }

}
