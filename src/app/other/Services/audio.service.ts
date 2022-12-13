import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {


  constructor() { }

  playlistVilles : string[] =[
    "../../../assets/sound/musiques-villes/palette.mp3",
    "../../../assets/sound/musiques-villes/jadielle.mp3",
    "../../../assets/sound/musiques-villes/lavanville.mp3",
    "../../../assets/sound/musiques-villes/azuria.mp3",
    "../../../assets/sound/musiques-villes/celadopole.mp3",
  ]
  public audio = new Audio();
  public audioTurn : boolean = true

  //************************************************
    // paramètre objet audio
    // start =>
      // audio.load();
      // audio.play();
    // mute => muted (bool)
    // volume => volume (int)
    // pause => paused (bool)
    // repet => loop (bool)
  //***********************************************
  playAudioMenu(){
    let nbRandom = Math.floor(Math.random() * this.playlistVilles.length)
    this.audio.src = this.playlistVilles[nbRandom];
    console.log(this.playlistVilles[nbRandom])
    this.audio.loop = true
    this.audio.volume = 0.1
    this.audio.load();
    this.audio.play();
  }

  playaudioButton(){
    let btnAudio = new Audio();
    btnAudio.src = "../../../assets/sound/divers/buttonPokemon.mp3"
    btnAudio.load();
    btnAudio.play();
  }

  stopAudio(){
    this.audio.pause()
    this.audioTurn = false
  }

  playAudio(){
    // this.audio.loop = true
    this.audio.play()
    this.audioTurn = false
  }

  setVolume(volume) {
    console.log(volume)
    console.log(this.audio.volume.valueOf())
    this.audio.volume = volume + 0.0;
  }
}
