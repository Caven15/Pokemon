import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/other/Services/api.service';
import { AudioService } from 'src/app/other/Services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(
  private _pokeService : ApiService,
  private _audio : AudioService
  ) { }

  ngOnInit(): void {
  }

  playBtn(){
    this._audio.playaudioButton()
  }
}
