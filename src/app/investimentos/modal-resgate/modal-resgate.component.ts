import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Resgate } from 'src/app/investimentos/resgate/resgate.component';

export interface dadosModalResgate {
  sucesso?: boolean,
  acoes: Array<Resgate>
}

@Component({
  selector: 'app-modal-resgate',
  templateUrl: './modal-resgate.component.html',
  styleUrls: ['./modal-resgate.component.scss']
})
export class ModalResgateComponent implements OnInit {

  @Input() dados!: dadosModalResgate;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.dados)
  }

}
