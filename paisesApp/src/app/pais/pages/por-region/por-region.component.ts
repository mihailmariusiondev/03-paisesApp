import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = []
  placeholderInput : string = "Buscar por capital..."

  constructor(private paisService: PaisService) { }

  getClaseCss(region : string ) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscarPorRegion(region: string) {

    // esto para que no vuelva a hacer la request si la region activa es la misma
    if(region === this.regionActiva) {return;}

    this.paises = [];
    this.regionActiva = region

    this.hayError = false;
    this.paisService.getPaisesPorRegion(this.regionActiva)
      .subscribe(paisesResultado => {

        this.paises = paisesResultado

      }, (err) => {
        this.hayError = true
        this.paises = []
      })


  }

}
