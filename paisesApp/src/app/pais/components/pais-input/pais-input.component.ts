import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {
  termino: string = 'Bra'

  @Output() onEnter : EventEmitter<string> = new EventEmitter();

  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
