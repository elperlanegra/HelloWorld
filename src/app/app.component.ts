import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

    listEstudents:any [] = [
      {name: 'Carlos', status: 'Activo'},
      {name: 'Juan', status: 'Activo'},
      {name: 'Pedro', status: 'Activo'},
      {name: 'Marlon', status: 'Activo'},      
      {name: 'Tressy', status: 'Activo'},
      {name: 'Dominga', status: 'Activo'},
      {name: 'Carlos', status: 'Activo'},
      {name: 'Carlos', status: 'Activo'},
    ]

}
