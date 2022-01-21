import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Investimento } from '../../models/investimento.model';

@Component({
  selector: 'app-detalhes-investimento',
  templateUrl: './detalhes-investimento.component.html',
  styleUrls: ['./detalhes-investimento.component.scss']
})
export class DetalhesInvestimentoComponent implements OnInit {

  @Input() investimento!: Investimento;
  @Output() fecharDetalhes = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public voltar(): void {
    this.fecharDetalhes.emit();
  }

}
