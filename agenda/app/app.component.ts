import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: [`
    .caja{
      width: 200px;
      height: 200px;
      background-color: red;
    }
    `]  	
})
export class AppComponent {

  alumnos: string = "Keepcoders";

  numeroDeLaSuerte: number = 42;

  textareaLineas: number = 10;

  pintamosClase: boolean = true;

  obtenerColor() {return "blue"; }

  mostrarMensaje(){ alert("Hola señoritas y señoritos!")}

  escribirMensaje(mensaje){
    console.log(mensaje)
  }
 }
