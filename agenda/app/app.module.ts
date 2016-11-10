import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { CajaComponent} from './caja.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    CajaComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
