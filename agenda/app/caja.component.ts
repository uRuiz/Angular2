import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "caja",
    template: `    
        <div [style.backgroundColor]="color"
        (mouseenter)="notificar()"></div>
    `,
    styles: [`
        div{
            width: 50px;
            height: 50px;
            margin:5px;
    }`]
})
export class CajaComponent {

    @Input() color: string = "red";

    @Output() encima: EventEmitter<string> = new EventEmitter();

    notificar(){
        this.encima.emit(`El color de la caja es ${this.color}`)
    }
}