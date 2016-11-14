import { Component } from "@angular/core";

import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component ({
    templateUrl: "./app/nuevo-contacto/nuevo-contacto.component.html"
})

export class NuevoContactoComponent {

    constructor(private _contactosService: ContactosService) { }
    // Almacenamos el contacto indicado.
    guardarContacto(contacto: Contacto): void {
        this._contactosService.guardarContacto(contacto)
                              .subscribe(contacto => alert("Contacto creado!"));
    }
 }