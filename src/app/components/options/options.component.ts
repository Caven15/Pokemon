import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/other/Services/audio.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private _audio : AudioService) { }

  musicActive : boolean = this._audio.audioTurn

  ngOnInit(): void {
  }

  musicOn(){
    this.musicActive = true
    this._audio.playAudio()
  }

  musicOff(){
    this.musicActive = false
    this._audio.stopAudio()
  }

  valueChanged(valeur){
    this._audio.setVolume(valeur.value)
  }
}
