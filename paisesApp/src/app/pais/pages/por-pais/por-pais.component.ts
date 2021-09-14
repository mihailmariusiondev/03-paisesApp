import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = 'Bra'
  hayError: boolean = false;
  paises : Country[] = []

  buscar(terminoArgumento: string) {
    this.termino = terminoArgumento
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe(paisesResultado => {

        console.log(paisesResultado)
        this.paises = paisesResultado

      }, (err) =>{
        this.hayError = true
        this.paises   = []
      })
  }

}
