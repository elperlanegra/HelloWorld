import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Two Data Binding
  titleTwoDataBinding = '';


  // Event Binding
  title = 'Este es un ejemplo del event binding';

  btnTitle(): void {
    (this.title = 'En el proximo ejemplo sera de Two way data-binding'), 3000;
  }

  // Property Binding
  textPlaceHolder = 'Escriba algo aqui';
  deshabilitado = true;
  imgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaQDHlahULtTvIAoCjAC2DYGKQpMzTENuEKQRN_RNHxj0tQWRHyivaZ3e1ozcV6WAeLg&usqp=CAU';

  // Interpolación
  name = 'Manuel Duarte';

  constructor() {
    setInterval(() => (this.deshabilitado = false), 3000);
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2;
  }
}
