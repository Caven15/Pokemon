import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*
  // route pour avoir le nom du pokémon en francais
    // https://pokeapi.co/api/v2/pokemon-species/1/ => names[3].name
  */

  NB_POKEMON : number = 151
  baseUrl : string = "https://pokeapi.co/api/v2"
  listePokemon : pokemon[]

  constructor(
    private _http : HttpClient
  ) { }

  getById(id : number){
    let pokemon = this._http.get<pokemon>(`${this.baseUrl}/pokemon/${id}`)
    return pokemon
  }

  loadAllFromApi(){
    for (let i = 1; i < this.NB_POKEMON; i++) {
      this.getById(i).subscribe({
        next : (datas) => {
          console.log("Id    : ", datas.id)
          console.log("Nom    : ", datas.name)
          console.log("Taille : ",  datas.height)
          console.log("Poids  : ",  datas.weight)
          console.log("XP  : ",  datas.base_experience)
          console.log("------------------")
        }
      })
    }
  }
}