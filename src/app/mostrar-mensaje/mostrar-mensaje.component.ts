import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
mensaje: string = '';
resetearMensaje() {
this.mensaje = 'No, estoy castigada';
}
mostrarMensaje() {
this.mensaje = 'Hola, ¿Sales minerales?';
}

}
