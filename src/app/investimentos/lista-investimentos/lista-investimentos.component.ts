import { Component, OnInit } from '@angular/core';
import { Investimento } from '../../models/investimento.model';
import { ApiMockService } from '../../services/api-mock.service';

@Component({
  selector: 'app-lista-investimentos',
  templateUrl: './lista-investimentos.component.html',
  styleUrls: ['./lista-investimentos.component.scss']
})
export class ListaInvestimentosComponent implements OnInit {

  investimentos: Investimento[] = [];

  showDetalhes = false;

  investimentoSelecionado!: Investimento;

  constructor(private apiService: ApiMockService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      const resp = response.response;
      if (resp.status !== '200') {
        alert('erro na api');
      }

      this.investimentos = resp.data.listaInvestimentos;
    });
  }

  abrirDetalhes(investimento: Investimento): void {
    if (investimento.indicadorCarencia !== 'N') {
      return;
    }
    this.investimentoSelecionado = investimento;
    this.showDetalhes = true;
  }

}
