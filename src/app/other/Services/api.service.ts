import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*
  // route pour avoir le nom du pokémon en francais
    // https://pokeapi.co/api/v2/pokemon-species/1/ => names[3].name
  */

  NB_POKEMON : number = 1
  baseUrl : string = "https://pokeapi.co/api/v2"
  listePokemon : pokemon[]

  constructor(
    private _http : HttpClient
  ) { }

  getById(id : number){
    let pokemon = this._http.get<any>(`${this.baseUrl}/pokemon/${id}`)
    return pokemon
  }

  loadAllFromApi(){
    for (let i = 1; i < this.NB_POKEMON +1; i++) {
      this.getById(i).subscribe({
        next : (datas) => {
          console.log("-------------------------------------------")

          console.log("Id    : ", datas.id)
          console.log("Nom    : ", datas.name)
          console.log("Taille : ",  datas.height)
          console.log("Poids  : ",  datas.weight)
          console.log("XP  : ",  datas.base_experience)
          console.log("Img  : ",  datas.sprites.other.dream_world.front_default)

          console.log("------ Types --------")
          for (let j = 0; j < datas.types.length; j++) {
            console.log(`${j+1} : `,datas.types[j].type.name)
          }
          console.log("---------------------")

          console.log("------ statistiques --------")
          for (let j = 0; j < datas.stats.length; j++) {
            console.log(datas.stats[j].stat.name, "=>", datas.stats[j].base_stat)
            console.log( )
          }
          console.log("---------------------")

          console.log("-------------------------------------------")
        }

      })
    }
  }
}