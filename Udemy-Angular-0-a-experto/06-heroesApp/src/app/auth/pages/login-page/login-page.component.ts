import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin(){
    this.authService.login('pausalido@gmail.com','12345')
      .subscribe(result => {
        console.log({result});
        this.router.navigate(['/'])
      })
  }

}
