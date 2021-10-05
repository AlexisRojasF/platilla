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
        { titulo: 'Main', url: 'dashboard', data: { titulo: 'Dashboard' } },
        {
          titulo: 'progressBar',
          url: 'progress',
          data: { titulo: 'Progress' },
        },
        { titulo: 'Grafica', url: 'grafica1', data: { titulo: 'Grafica' } },
        { titulo: 'Promesas', url: 'promesas', data: { titulo: 'Promesas' } },
      ],
    },
  ];

  constructor() {}
}
