import { Component } from '@angular/core';
import { ApiService } from './other/Services/api.service';
import { AudioService } from './other/Services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pokemon';
  constructor(
    private _audio : AudioService,
    private _pokeApi : ApiService
    ) { }

  ngOnInit(): void {
    this._pokeApi.loadAllFromApi()
    this._audio.playAudioMenu()
  }
}


