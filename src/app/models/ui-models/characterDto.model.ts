import { CharacterOriginDto } from "./characterOriginDto.model";

export interface CharacterDto{
    id:number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: CharacterOriginDto;
}