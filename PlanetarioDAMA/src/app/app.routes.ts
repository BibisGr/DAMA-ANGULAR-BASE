import { Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {PlanetarioComponent} from './componentes/planetario/planetario.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';

export const routes: Routes = [
  //ruta por defecto
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //ruta de componente
  {path: 'home', component: HomeComponent},
  {path: 'planetario', component: PlanetarioComponent},
  //ruta de redireccion
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];
