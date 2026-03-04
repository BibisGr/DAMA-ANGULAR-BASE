import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TypescriptComponent} from './componentes/typescript/typescript.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypescriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase2-Typescript';
}
