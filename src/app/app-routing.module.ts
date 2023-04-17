import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:CharactersComponent},
  {path:"characters", component:CharactersComponent},
  {path:"character/overview/:id", component:CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
