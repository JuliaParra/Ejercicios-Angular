import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,

  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p>
      Aprende Angular!!
    </p>
  `,
  styles: `
  h1{
    color:blue;
    font-size:36px}
    p{font-size:19px}`
})
export class ComponenteInlineComponent {
  tituloComponenteInline = 'Componente Inline'
}
