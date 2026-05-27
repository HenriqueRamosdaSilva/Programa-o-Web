import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // Nome da tag customizada (Material Slide 17)
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: '../app.css' // Reutilizando os estilos globais
})
export class HeaderComponent {
  tituloCatalogo: string = '🚀 Meu Mini Catálogo Angular';
}