import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() public placeholderInput: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = ''

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) //RxJS debounce operator to delay calls to the search method
      .subscribe(valor => {
        // debugger;
        console.log(valor);
        this.onDebounce.emit(valor)
      })
  }

  buscar() {
    // debugger;
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    // debugger;
    // Forma 1 de escuchar el valor de tecla presionada (le mando el evento)
    // const valor = evt.target.value;
    // console.log(valor);

    // Forma 2 de escuchar el valor de la tecla presionada (observables)
    this.debouncer.next(this.termino)
  }

}
