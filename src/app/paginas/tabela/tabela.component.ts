import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  public itensLoja:any[]=[];

  ngOnInit(): void {
    this.itensLoja.push({
      id: 1,
      nome: 'Desktop',
      descricao: 'Computador de Mesa',
      preco: 2000.00,
      estoque: 1
    })
    this.itensLoja.push({
      id: 2,
      nome: 'Notebook',
      descricao: 'Computador Portátil',
      preco: 2800.00,
      estoque: 1
    })
  }

}
