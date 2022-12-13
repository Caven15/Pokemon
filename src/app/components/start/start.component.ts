import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/other/Services/api.service';
import { AudioService } from 'src/app/other/Services/audio.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private _audio : AudioService
    ) { }

  ngOnInit(): void {
  }
  playBtn(){
    this._audio.playaudioButton()
  }
}
