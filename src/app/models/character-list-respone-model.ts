import { CharacterResponseModel } from './character-respone-model';

export class CharacterListResponseModel {
    count: number;
    next: string;
    previous: string;
    results: CharacterResponseModel[];
}