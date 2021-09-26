import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = []
  placeholderInput: string = 'Buscar por país...'
  paisesSugeridos: Country[] = []
  mostrarSugerencias : boolean = false;

  buscar(terminoArgumento: string) {
    // debugger;
    this.mostrarSugerencias = false;
    this.termino = terminoArgumento
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe(paisesResultado => {

        // console.log(paisesResultado)
        this.paises = paisesResultado

      }, (err) => {
        this.hayError = true
        this.paises = []
      })
  }

  sugerencias(termino: string) {
    this.hayError = false
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarCapital(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
       (err) => this.paisesSugeridos = [])
    // TODO crear sugerencias
  }

  buscarSugerido(termino : string){
    this.buscar(termino)
  }

}
