import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MiPrimerComponenteComponent} from './componentes/mi-primer-componente/mi-primer-componente.component';
import {MiSegundoComponenteComponent} from './componentes/mi-segundo-componente/mi-segundo-componente.component';
import {MiTercerComponenteComponent} from './componentes/mi-tercer-componente/mi-tercer-componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiPrimerComponenteComponent, MiSegundoComponenteComponent, MiTercerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-app';
  author= 'Willman';
}
