import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexDetailComponent } from './components/pokedex-detail/pokedex-detail.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path : "", pathMatch : 'full', redirectTo : 'start'},
  {path : "", component : StartComponent},
  {path : "start", component : StartComponent},
  {path : "home", component : HomeComponent},
  {path : "pokedex", component : PokedexComponent},
  {path : "pokedex-detail/:id", component : PokedexDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
