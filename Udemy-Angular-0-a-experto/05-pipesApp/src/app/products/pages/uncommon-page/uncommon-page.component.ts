import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string= 'Pau';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients: string[] = ['Maria','Pedro','Pau','Fernando','Alex'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteLastClient(): void {
    this.clients.shift();
  }

  //KeyValue pipe

  public person = {
    name: 'Pau',
    age: 23,
    address: 'Ontinyent, Espanya',
  }

  //Async pipe
  public myObservableTimer = interval(2000);

}
