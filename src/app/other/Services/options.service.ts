import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  animationsTeam : boolean = false;
  animationsSalameche : boolean = false;
  animationsPikachu : boolean = false;
  animationsDracaufeu : boolean = false;
  animationsDracaufeuReverse : boolean = false;

  constructor() { }
}
