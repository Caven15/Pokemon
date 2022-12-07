import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/other/models/pokemon/pokemon.model';
import { ApiService } from 'src/app/other/Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(
    private _pokeApi : ApiService
  ) { }

  ngOnInit(): void {
    this._pokeApi.loadAllFromApi()
  }


}
