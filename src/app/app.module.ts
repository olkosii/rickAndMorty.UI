import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HeroImageComponent } from './layout/hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    NavBarComponent,
    HeroImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
