import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  getDarkMode(): boolean {
    const darkMode = localStorage.getItem('darkMode');

    return darkMode
      ? darkMode === 'true'
      : false;
  }

  setDarkMode(darkMode: boolean): void {
    localStorage.setItem('darkMode', `${darkMode}`)
  }
  
}