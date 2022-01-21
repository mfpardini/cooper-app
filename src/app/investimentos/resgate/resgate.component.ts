import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acao } from 'src/app/models/acao.model';
import { Investimento } from 'src/app/models/investimento.model';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  @Input() investimento!: Investimento;
  @Output() cancelarResgate = new EventEmitter();

  valoresResgate: Array<any> = [];

  acoes: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.acoes = this.investimento.acoes.map(acao => {
      return {
        ...acao, valorResgate: 0
      };
    })
  }

  valorAcao(acao: Acao) {
    return this.investimento.saldoTotal * acao.percentual / 100;
  }

  get valorTotalResgate() {
    let valorTotal = 0;
    this.acoes.forEach(acao => {
      valorTotal += parseFloat(acao.valorResgate);
    });
    return valorTotal;
  }

  resgatarValor() {
    
  }

  cancelar() {
    this.cancelarResgate.emit();
  }

}
