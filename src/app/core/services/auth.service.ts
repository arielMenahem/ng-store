import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  public authanticate(user: IUser): boolean {
    return true;
  }
}
