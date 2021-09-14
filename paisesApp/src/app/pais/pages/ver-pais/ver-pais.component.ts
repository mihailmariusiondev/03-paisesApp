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

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlphaCode(id)),
        tap(console.log) //recibe el producto del observable y lo imprime en consola
        // tap(resp => console.log(resp)) // lo mismo
      )
      .subscribe(alphaCodePaisParam => this.pais = alphaCodePaisParam)

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAlphaCode(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       });
    //   })
  }

}
