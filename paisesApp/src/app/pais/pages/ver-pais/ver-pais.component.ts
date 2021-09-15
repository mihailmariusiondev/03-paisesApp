import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
        // NOTA el param ---> idPais es definido en los routes

        // const routes: Routes = [  {
        //     path: 'pais/:idPais', ----> param pais/idPais
        //     component: VerPaisComponent,
        //   }
        // ];

        // DEBE coincidir el nombre del param con el definido en los routes
        // usamos desestructuracion para quedarnos con el param idPais
        switchMap(({ idPais }) => this.paisService.getPaisPorAlphaCode(idPais)),
        tap(console.log)
      )
      .subscribe(alphaCodePaisParam => this.pais = alphaCodePaisParam)
  }

}
