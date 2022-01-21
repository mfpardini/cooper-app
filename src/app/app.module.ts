import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './shared/modal-basic/modal-basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaInvestimentosComponent } from './investimentos/lista-investimentos/lista-investimentos.component';
import { registerLocaleData } from '@angular/common';
import { DetalhesInvestimentoComponent } from './investimentos/detalhes-investimento/detalhes-investimento.component';
import { ResgateComponent } from './investimentos/resgate/resgate.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ModalBasicComponent,
    PageNotFoundComponent,
    ListaInvestimentosComponent,
    DetalhesInvestimentoComponent,
    ResgateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
