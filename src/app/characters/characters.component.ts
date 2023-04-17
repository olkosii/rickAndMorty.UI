import { CharacterDto } from './../models/ui-models/characterDto.model';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: CharacterDto[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(response => {this.characters = response})
  }

}
