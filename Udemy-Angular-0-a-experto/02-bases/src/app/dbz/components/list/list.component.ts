import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  deleteEmiter: EventEmitter<string> = new EventEmitter();

  @Input('characterList')
  characters: Character[] = []

  deleteCharacterById(id?: string):void {
    if(!id) {throw new Error('No id provided')}
    this.deleteEmiter.emit(id);
  }

}
