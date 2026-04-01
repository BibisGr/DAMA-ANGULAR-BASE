import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanetarioInterface} from '../common/planetario-interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetarioServiceService {
  // Paso 0 crear la variable para la url
  url: string = 'data/data.json';

  //Paso1: llamar al HTTP CLIENT
  //manera 1
  constructor(private http: HttpClient) { }
  //manera 2
  //private http: HttpClient = inject(HttpClient);

  //Paso 2: crear la funcion y llamar a la inteface
  getInfo():Observable<PlanetarioInterface>{
    return this.http.get<PlanetarioInterface>(this.url)
  }

}
