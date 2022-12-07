import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/other/Services/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private _pokeApi : ApiService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._pokeApi.loadAllFromApi()
  }

  goToHome(){
    this._router.navigate(['home'])
  }
}
