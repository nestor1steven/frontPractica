import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: any[] = [
    {
      titulo: '',
      submenu: [
        { titulo : 'Inicio', url: '/incio'},
        { titulo : 'nosotros', url: '/nosotros'},
        { titulo : 'servicios', url: '/servicios'},
        { titulo : 'contacto', url: '/contacto'},
      ]
    }
  ];

  constructor() { }
}
