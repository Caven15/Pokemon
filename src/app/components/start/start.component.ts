import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/other/Services/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private _pokeApi : ApiService) { }

  ngOnInit(): void {
    this._pokeApi.loadAllFromApi()
    // this._pokeApi.loadFrenchDataToApi()
  }


}
