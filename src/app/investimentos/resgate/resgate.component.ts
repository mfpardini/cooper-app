import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Acao } from 'src/app/models/acao.model';
import { Investimento } from 'src/app/models/investimento.model';
import { ModalResgateComponent } from '../modal-resgate/modal-resgate.component';

export interface Resgate {
  acao: Acao,
  valorAcao: number,
  valorResgate: any
}

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  @Input() investimento!: Investimento;
  @Output() cancelarResgate = new EventEmitter();

  acoes: Array<Resgate> = [];

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.acoes = this.investimento.acoes.map(acaoOrg => {
      return {
        acao: acaoOrg,
        valorAcao: this.valorAcao(acaoOrg),
        valorResgate: 0
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

  valorInvalido(acao: Resgate) {
    return acao.valorResgate > this.valorAcao(acao.acao);
  }

  resgatarValor() {

    if (this.valorTotalResgate <= 0) {
      return;
    }

    const contemErro = this.acoes.filter(acao => {
      return this.valorInvalido(acao);
    })

    if (this.valorTotalResgate > this.investimento.saldoTotal) {
      this.abrirModalResgate(false);
    } else if (contemErro.length > 0) {
      this.abrirModalResgate(false);
    } else {
      this.abrirModalResgate(true);
    }
  }

  abrirModalResgate(sucesso: boolean): void {
    const modalRef = this.modalService.open(ModalResgateComponent, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.dados = {
      sucesso: sucesso,
      acoes: this.acoes,
    }
  }

  cancelar() {
    this.cancelarResgate.emit();
  }

}
