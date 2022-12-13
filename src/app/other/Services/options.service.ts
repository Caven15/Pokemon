import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  animationTeam : boolean = false
  animationSala : boolean = false
  animationPika : boolean = false
  animationDraco : boolean = false
  animationDracoR : boolean = false

  constructor() { }

  moveStatAnimationTeam(){
    console.log(this.animationTeam)
    this.animationTeam = !this.animationTeam
  }

  moveStatanimationSala(){
    this.animationSala = !this.animationSala
  }

  moveStatanimationPika(){
    this.animationPika = !this.animationPika
  }

  moveStatanimationDraco(){
    this.animationDraco = !this.animationDraco
  }

  moveStatanimationDracoR(){
    this.animationDracoR = !this.animationDracoR
  }
}
