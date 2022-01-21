import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesInvestimentoComponent } from './investimentos/detalhes-investimento/detalhes-investimento.component';
import { ListaInvestimentosComponent } from './investimentos/lista-investimentos/lista-investimentos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'investimentos',
    component: ListaInvestimentosComponent
  },
  {
    path: 'investimento:nome',
    component: DetalhesInvestimentoComponent
  },
  {
    path: '',
    redirectTo: '/investimentos',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
