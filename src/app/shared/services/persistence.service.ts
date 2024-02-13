import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localstorage', error);
    }
  }

  get(key: string): any {
    try {
      const data = localStorage.getItem(key!);

      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Error getting data from localstorage', error);
      return null;
    }
  }
}
