// En el documento 'app.component.ts' definimos el componente raíz de nuestra app.
import { Component } from '@angular/core';

// Decoramos la clase 'AppComponent' con el decorador 'Component' para que ésta se
// comporte como un componente. Es necesario indicar ciertos metadatos.
@Component({

  // Con 'selector' establecemos el nombre de la etiqueta HTML
  // que usaremos para instanciar este componente.
  selector: 'mensaje',

  // Con 'templateUrl' indicamos la ruta al HTML que contiene la vista del
  // componente. Si es muy liviana, podemos indicarla en línea usando 'template'.
  templateUrl: './app/app.component.html',

})
export class AppComponent {

}
