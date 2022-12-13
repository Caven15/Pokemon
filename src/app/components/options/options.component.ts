import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/other/Services/audio.service';
import { OptionsService } from 'src/app/other/Services/options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  constructor(
  private _audio : AudioService,
  private _option : OptionsService
  ) { }

  animationTeam : boolean = this._option.animationTeam
  animationSala : boolean = this._option.animationSala
  animationPika : boolean = this._option.animationPika
  animationDraco : boolean = this._option.animationDraco
  animationDracoR : boolean = this._option.animationDracoR

  musicActive : boolean = this._audio.audioTurn

  ngOnInit(): void {
  }

  musicOn(){
    this.playBtn()
    this.musicActive = true
    this._audio.playAudio()
  }

  musicOff(){
    this.playBtn()
    this.musicActive = false
    this._audio.stopAudio()
  }

  valueChanged(valeur){
    this.playBtn()
    this._audio.setVolume(valeur.value)
  }

  playBtn(){
    this._audio.playaudioButton()
  }

  startAnimation1(){
    this._option.moveStatAnimationTeam()
  }

  startAnimation2(){
    this._option.moveStatanimationSala()
  }

  startAnimation3(){
    this._option.moveStatanimationPika()
  }

  startAnimation4(){
    this._option.moveStatanimationDraco()
  }

  startAnimation5(){
    this._option.moveStatanimationDracoR()

  }
}
