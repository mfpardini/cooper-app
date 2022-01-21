import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investimento } from '../models/investimento.model';

export interface ResponseMockApi {
  response: {
    status: string,
    data: {
      listaInvestimentos: Investimento[]
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  private readonly apiUrl = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) { }

  getData(): Observable<ResponseMockApi> {
    return this.http.get<ResponseMockApi>(this.apiUrl);
  }
}
