import { statistique } from "./statistique.model"

export class pokemon {
  Id : number
  Nom : string
  Taille : number
  Poids : number
  Experience : number
  Lien_image : string
  Types : string[]
  Statistiques : statistique
  Description : string[]
}