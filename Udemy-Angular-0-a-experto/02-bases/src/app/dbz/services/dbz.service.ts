
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
  ];

  constructor() { }

  addCharacter(c: Character):void {
    this.characters.push({id: uuid(),...c})
  }

  // deleteCharacterAt(i: number) {
  //   this.characters.splice(i, 1);
  // }


  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(item=> item.id !== id)
  }

}
