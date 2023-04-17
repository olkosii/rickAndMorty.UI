import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/api-models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseApiUrl = "https://localhost:53465/RickAndMorty/";

  constructor(private httpClient: HttpClient) { }

  getCharacters(){
    return this.httpClient.get<Character[]>(this.baseApiUrl + 'GetCharacters')
  }

  getCharacterById(id: number){
    return this.httpClient.get<Character>(this.baseApiUrl + 'GetCharacterById/' + id)
  }
  
}
