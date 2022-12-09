import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon} from 'src/app/models/pokemon/pokemon.model';

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
  listePokemon : pokemon[] = []

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

          // Recherche des types du pokemon
          let pokemonTypes : string[] = []
          for (let j = 0; j < datas.types.length; j++) {
            // console.log("------ Types --------")
            // console.log(`${j+1} : `,datas.types[j].type.name)
            pokemonTypes.push(datas.types[j].type.name)
          }

          // Constuctions de l'objet pokemon
          let pokemon : pokemon = {
            Id : datas.id,
            Nom : datas.name,
            Taille : datas.height,
            Poids : datas.weight,
            Experience : datas.base_experience,
            Lien_image : datas.sprites.other.dream_world.front_default,
            Types : pokemonTypes,
            Statistiques : {
              Vie : datas.stats[0].base_stat,
              Attaque : datas.stats[1].base_stat,
              Defense : datas.stats[2].base_stat,
              Attaque_speciale : datas.stats[3].base_stat,
              Defense_speciale : datas.stats[4].base_stat,
              Vitesse : datas.stats[5].base_stat
            },
            Description : []
          }

          // console.log(pokemon)
          this.listePokemon.push(pokemon)
        },
        // complete : () => {
        //   console.log("tout les pokemon ajouter a la liste")
        //   console.log("---------------------------------")
        //   this.listePokemon.forEach(element => {
        //     console.log(element.Id + " : " + element.Nom)
        //   })
        //   console.log("---------------------------------")
        // }
      })
    }
  }

  getOne(id : number){
    return this.listePokemon[id]
  }

  viewAllPokemon(){
    this.listePokemon.forEach(element => {
      console.log(`${element.Id} : ${element.Nom}`)
    });
  }

  getAllPokemons() : pokemon[]{
    return this.listePokemon
  }
}