import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-segundo-componente',
  imports: [],
  templateUrl: './mi-segundo-componente.component.html',
  styleUrl: './mi-segundo-componente.component.css'
})
export class MiSegundoComponenteComponent {
mensaje: string = "Hola, soy el segundo componente";
}
