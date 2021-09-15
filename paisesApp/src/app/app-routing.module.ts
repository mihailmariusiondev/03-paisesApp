import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full' //que coincida la ruta entera
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:idPais',
    component: VerPaisComponent,
  },
  {
    // ruta 404 (no encontrado o no coincide ninguna ruta)
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [
    // forRoot = rutas principales
    // forChild = rutas secundarias
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
