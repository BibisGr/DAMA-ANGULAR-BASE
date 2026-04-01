export interface Personaje {
  id_personaje: number;
  nombre_real: string;
  nombre_guerrera: string;
  cuerpoCeleste_origen: string;
  rol: string;
  edad:number;
  personalidad: string[];
  habilidades: habilidad[];
  poderes: poder[];
  armas: arma[];
  transformaciones: string[];
  aliados: string[];
  enemigos: string[];
  estado: boolean;
  url_image: string;
}

export interface habilidad {
  name: string;
  description: string;
}
export interface arma {
  name: string;
  tipo: string;
  ataque: number;
}
export interface poder {
  name: string;
  efectividad: number;
  ataque: number;
}
