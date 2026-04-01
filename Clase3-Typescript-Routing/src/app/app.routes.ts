import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './componentes/page-not-found/page-not-found.component';
import {HomeComponent} from './componentes/home/home.component';
import {PersonajesComponent} from './componentes/personajes/personajes.component';
import {PersonajeComponent} from './componentes/personaje/personaje.component';
import {AboutComponent} from './componentes/about/about.component';

export const routes: Routes = [
  //ruta por defecto
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //ruta de componente
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'personaje',
    component: PersonajeComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  //ruta de redirecion-redirect
  {
    path: '**',
    component: PageNotFoundComponent,
    // redirectTo: '/home',
    pathMatch: 'full'
  }
];
