import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Bra'
  hayError: boolean = false;

  paises : Country[] = []

  constructor(private paisService: PaisService) { }

  buscar() {
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
