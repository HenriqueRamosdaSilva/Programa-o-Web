import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header'; // Importando o componente criado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent], // Adicionado aqui!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  exibirProdutos: boolean = true;
  termoBusca: string = '';

  produtos = [
    { nome: 'Notebook Gamer', preco: 4500.00 },
    { nome: 'Mouse Sem Fio', preco: 120.00 },
    { nome: 'Teclado Mecânico', preco: 350.00 },
    { nome: 'Monitor 4K', preco: 2100.00 }
  ];

  alternarVisibilidade() {
    this.exibirProdutos = !this.exibirProdutos;
  }

  get produtosFiltrados() {
    return this.produtos.filter(p => 
      p.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }
}