// En el documento 'app.component.ts' definimos el componente raíz de nuestra app.
import { Component, OnInit } from '@angular/core';

import { Contacto } from "./entidades/contacto";
import { ContactosService } from "./servicios/contactos.service";

// Decoramos la clase 'AppComponent' con el decorador 'Component' para que ésta se
// comporte como un componente. Es necesario indicar ciertos metadatos.
@Component({
    selector: 'mensaje',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent { }