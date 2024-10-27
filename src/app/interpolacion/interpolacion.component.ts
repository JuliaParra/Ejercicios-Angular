import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
titulo = 'Universidad de la Calle';
usuario = {
  nombre: 'Esteban Dido',
  edad:40
};

saludar(){
  return `Hola, ${this.usuario.nombre}`
}
}
