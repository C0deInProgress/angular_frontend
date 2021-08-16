import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from './agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient) { }
  

/*   findAll():Observable<Agendamento[]>{
    const url = `${this.baseUrl}/shedules`
    return this.http.get<Agendamento[]>(url)
  } */

  create(agendamento: Agendamento): Observable<Agendamento>{
    const url = `${this.baseUrl}/shedules`
    return this.http.post<Agendamento>(url, agendamento);
  }
}
