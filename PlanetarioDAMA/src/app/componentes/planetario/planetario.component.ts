import {Component, inject, OnInit} from '@angular/core';
import {PlanetarioInterface} from '../../common/planetario-interface';
import {PlanetarioServiceService} from '../../servicios/planetario-service.service';

@Component({
  selector: 'app-planetario',
  imports: [],
  templateUrl: './planetario.component.html',
  styleUrl: './planetario.component.css'
})
export class PlanetarioComponent implements OnInit{
  //paso1 crear el objeto para manejar la data
  planetario!: PlanetarioInterface

  //Paso2 llamar al servicio
    //Manera1
  constructor(private servicioPlanetario: PlanetarioServiceService) {
  }
    //Manera2
  //private servicioPlanetario: PlanetarioServiceService = inject(PlanetarioServiceService)

  //Paso3 implementar el OnInit
  ngOnInit(): void {
    this.loadInfo();
  }

  //Paso4 crear la funcion que llamara a los datos
  private loadInfo() {
    this.servicioPlanetario.getInfo().subscribe(
      {
        next: data =>{
          this.planetario = data
          console.log(this.planetario)
        },
        error: error =>{
          console.log('no data loaded because: ', error);
        },
        complete: ()=>{
          console.log('complete');
        }
      }
    )
  }
}
