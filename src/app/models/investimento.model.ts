import { Acao } from "./acao.model";

export interface Investimento {
    nome: string,
    objetivo: string,
    saldoTotal: number,
    indicadorCarencia: string,
    acoes: Acao[]
}
