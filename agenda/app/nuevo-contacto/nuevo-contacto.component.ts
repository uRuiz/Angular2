import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component ({
    templateUrl: "./app/nuevo-contacto/nuevo-contacto.component.html"
})

export class NuevoContactoComponent {

    constructor(
        private _contactosService: ContactosService,
        private _router: Router) { }
    // Almacenamos el contacto indicado.
    guardarContacto(contacto: Contacto): void {
        this._contactosService.guardarContacto(contacto)
                              .subscribe(contacto => this._router.navigate(["/mis-contactos"]));
    }
 } 