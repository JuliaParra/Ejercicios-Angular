import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 private titulo = 'titulo componente hijo';

 get mostrartitulo(){
  return this.titulo


 }
}
