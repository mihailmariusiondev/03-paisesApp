import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  termino: string = 'Bra'
  hayError: boolean = false;
  paises: Country[] = []
  placeholderInput : string = "Buscar por capital..."

  buscar(terminoArgumento: string) {
    // debugger;
    this.termino = terminoArgumento
    this.hayError = false;
    this.paisService.buscarCapital(this.termino)
      .subscribe(paisesResultado => {

        // console.log(paisesResultado)
        this.paises = paisesResultado

      }, (err) => {
        this.hayError = true
        this.paises = []
      })
  }

}
