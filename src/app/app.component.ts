import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Manuel Duarte';


  // Interpolación
  constructor(){
    setInterval(()=> this.name = "Manuel", 3000 )
  }

  getSuma(num1:number, num2:number){
    return num1 + num2
  }

}
