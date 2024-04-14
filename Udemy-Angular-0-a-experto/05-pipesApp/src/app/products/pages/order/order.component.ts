import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public tableSort?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase= !this.isUpperCase;
  }

  changeOrder(order: keyof Hero):void {
    this.tableSort = order;
  }

}
