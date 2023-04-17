import { CharacterDto } from './../models/ui-models/characterDto.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character!: CharacterDto;
  characterId!: string | null;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(response => {
      this.characterId = response.get('id');

      if(this.characterId){
        this.characterService.getCharacterById(+this.characterId).subscribe(response => {
          this.character = response;
          console.log(this.character)
        });
      }

    })
  }
}
