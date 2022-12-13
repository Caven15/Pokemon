import { Component } from '@angular/core';
import { ApiService } from './other/Services/api.service';
import { AudioService } from './other/Services/audio.service';
import { OptionsService } from './other/Services/options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pokemon';

  constructor(
    private _audio : AudioService,
    private _options : OptionsService,
    private _pokeApi : ApiService
    ) { }

    animationTeam : boolean = this._options.animationTeam
    animationSala : boolean = this._options.animationSala
    animationPika : boolean = this._options.animationPika
    animationDraco : boolean = this._options.animationDraco
    animationDracoR : boolean = this._options.animationDracoR


  ngOnInit(): void {
    this._pokeApi.loadAllFromApi()
    this._audio.playAudioMenu()
  }
}


