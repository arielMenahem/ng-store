import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from 'src/app/shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  public onSubmit(loginForm: NgForm): void {
    const user: IUser = loginForm.value;
    const isAuthanticate: boolean = this.authService.authanticate(user);
  }
}
