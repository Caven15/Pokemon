import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexItemComponent } from './components/pokedex-item/pokedex-item.component';
import { PokedexDetailComponent } from './components/pokedex-detail/pokedex-detail.component';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    PokedexComponent,
    PokedexItemComponent,
    PokedexDetailComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
