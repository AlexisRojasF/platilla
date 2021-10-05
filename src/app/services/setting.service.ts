import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  linkTheme = document.querySelector('#theme');

  constructor() {
    const url =
      localStorage.getItem('url') || './assets/css/colors/default-dark.css';

    this.linkTheme?.setAttribute('href', url);
  }

  chageTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('url', url);
    localStorage.getItem('url');

    this.checkCurrenTheme();
  }

  checkCurrenTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach((elem) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
