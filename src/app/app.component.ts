import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from './componente-inline/componente-inline.component';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteInlineComponent, InterpolacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Hola Peñis!!';
}
