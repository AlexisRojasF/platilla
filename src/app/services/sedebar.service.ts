import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SedebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      sudMenu: [
        { titulo: 'Main', url: 'dashboard' },
        { titulo: 'progressBar', url: 'progress' },
        { titulo: 'Grafica', url: 'grafica1' },
      ],
    },
  ];

  constructor() {}
}
