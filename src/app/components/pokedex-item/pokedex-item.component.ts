import { Component, Input, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon/pokemon.model';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemonItem : pokemon

  constructor() { }

  ngOnInit(): void {
  }

  goto(id){
    
  }
}
