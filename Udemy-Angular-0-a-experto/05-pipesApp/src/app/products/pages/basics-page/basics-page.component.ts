import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'pau';
  public nameUpper: string = 'PAU';
  public fullName: string = 'pAu sAlIDo';

  public customDate: Date = new Date();
}
