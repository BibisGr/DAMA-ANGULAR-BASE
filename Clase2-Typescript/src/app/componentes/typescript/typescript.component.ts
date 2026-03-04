import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent implements OnInit {
  nombre: string = 'Bertha'
  apellido = 'Reyes'

  variable: null
  variable2: any
  variable3: undefined
  variable4: unknown
  variable5!: never
  variable6?: void

  frutas = [
    'uvas', 'fresas', 'bananas', 'melon'
  ]

  fruta: {
    nombre: string,
    peso: number,
    color: string[],
    caducidad: boolean,
    precio: number,
    sabor: string[]
  } = {
    nombre: 'fresa',
    peso: 10,
    color: ['red', 'white', 'pink'],
    caducidad: true,
    precio: 1.5,
    sabor: ['acido', 'dulce']
  }

  notas = [
    5, 6, 7, 8, 9, 10
  ]

  notaFinal = 0

  constructor() {
    this.variable = null;
    this.nombre = 'Ivan';
    this.fruta = {
      nombre: 'aguacate',
      peso: 300,
      color: ['negro', 'verde', 'marron'],
      caducidad: false,
      precio: 4.5,
      sabor: ['amargo', 'neutro']
    }
  }

  ngOnInit(): void {
    this.nombre = 'Nico'
    this.fruta = {
      nombre: 'fresa',
      peso: 10,
      color: ['red', 'white', 'pink'],
      caducidad: true,
      precio: 1.5,
      sabor: ['acido', 'dulce']
    }
  }

  VenderONoVender() {
    if (this.fruta.caducidad) {
      return 'No Vender'
    } else {
      return 'Vender'
    }
  }

  calcularmedia(notas: number[]) {
    this.notaFinal = 0;
    for (let i = 0; i <notas.length; i++){
      this.notaFinal += notas[i]
    }
    return this.notaFinal/ notas.length;
  }

  metodoCalcular(valor1: any, valor2: any) {
    return valor1 + valor2;
  }

}
