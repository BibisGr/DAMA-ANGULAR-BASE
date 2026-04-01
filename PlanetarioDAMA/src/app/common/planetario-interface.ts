export interface PlanetarioInterface {
  galaxias: Galaxia[]
  planetas: Planeta[]
  lunas: Luna[]
}

export interface Galaxia {
  id: number
  nombre: string
  tipo: string
  diametro_anios_luz: number
  planetas_ids: number[]
}

export interface Planeta {
  id: number
  nombre: string
  tipo: string
  distancia_al_sol_km: number
  galaxia_id: number
  lunas_ids: number[]
}

export interface Luna {
  id: number
  nombre: string
  planeta_id: number
  diametro_km: number
}
