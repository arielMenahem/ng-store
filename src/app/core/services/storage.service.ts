import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public setData(key: string, value: any): void {
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem(key, stringifiedData);
  }
  public getData(key: string): any {
    const rawData = localStorage.getItem(key);
    if (!rawData) return;
    const data = JSON.parse(rawData);
    return data;
  }

  // public editData(storageKey: string, value: any): void {
  //   const stringifiedData = JSON.stringify(value);
  //   localStorage.removeItem(key);
  //   localStorage.setItem(key, stringifiedData);
  // }

  public deleteData(storageKey: string): void {
    localStorage.removeItem(storageKey);
  }
}
