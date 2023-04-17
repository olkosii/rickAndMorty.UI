import { CharacterOrigin } from "./characterOrigin.model";

export interface Character{
    id:number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: CharacterOrigin;
}