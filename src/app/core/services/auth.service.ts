import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public authanticate(user: IUser): boolean {
    return true;
  }
}
