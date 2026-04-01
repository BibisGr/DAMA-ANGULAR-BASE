import {Component} from '@angular/core';
import {arma, habilidad, Personaje, poder} from '../../common/personaje';

@Component({
  selector: 'app-personaje',
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  sailorMoon!: Personaje;

  constructor() {
    this.sailorMoon = {
      id_personaje: 1,
      nombre_real: 'Usagi Tsukino',
      nombre_guerrera: 'Sailor Moon',
      cuerpoCeleste_origen: 'Luna',
      rol: 'protagonista',
      edad: 16,
      personalidad: [
        'llorona', 'infantil', 'inocente', 'alegre', 'dulce'
      ],
      habilidades: [
        {
          name: 'dormir',
          description: 'duerme muchas horas sin cansarse'
        }
      ],
      poderes: [
        {
          name: 'lanzamiento de tiara lunar',
          efectividad: 1000,
          ataque: 5
        },
        {
          name: 'magia de cetro lunar',
          efectividad: 6000,
          ataque: 4
        },
        {
          name: 'transformacion',
          efectividad: 0,
          ataque: 0
        },
      ],
      armas: [
        {
          name: 'tiara lunar',
          tipo: 'accesorio',
          ataque: 1000
        },
        {
          name: 'Cetro Lunar',
          tipo: 'cetro',
          ataque: 3000
        },
      ],
      transformaciones: [
        'Sailor moon S', 'Sailor Moon R', 'Princesa Serenity'
      ],
      aliados: [
        'sailor scouts', 'sailor starlights', 'tuxedo mask'
      ],
      enemigos: [
        'villanos'
      ],
      estado: true,
      url_image: 'https://m.media-amazon.com/images/I/71GaxUnnb9L.jpg'
    }
  }
}
