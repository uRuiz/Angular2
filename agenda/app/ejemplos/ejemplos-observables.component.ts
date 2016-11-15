import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: "ejemplos-observables",
    template: ""
})

export class EjemplosObservablesComponent {

    private _miObservable$: Observable<any> = Observable.create((observador: Observer<any>) =>{

        // Enviamos datos con 'next()'.
        observador.next("Buenas noches KeepCoders");
        observador.next(123456);
        observador.next(true);

        // Notificamos un error con 'error()'
        observador.error("!!Cagada monumental !!");

        // indicamos que hemos terminado. Sino quitamos el error no llega aquí
        observador.complete();

    });

    constructor() {
        this._miObservable$.subscribe(

            // Como primer manejador indicamos aquel que se encagará de los datos enviados con 'next()'.
            (dato) => {
                console.log(`Dato enviado con next: ${dato}`);
            },

            // Como segundo manejadorindicamos aquel que se encagará de los errores notificados con 'error()'.
            (error) => {
                console.log(`Dato enviado con error: ${error}`);
            },

            // Como tercer manejador indicamos aquel que se encagará de repsonde a 'complete()'.
            () => {
                console.log(`¡He terminado!`);
            }
        );
    }

    
}