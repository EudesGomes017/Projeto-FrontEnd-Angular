import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produtos } from './prutos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  //metodo que lista todos os produtos por determinada categoria 
  findAllByCategoria(id_cat: String): Observable<Produtos[]> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`
    return this.http.get<Produtos[]>(url)
  }
}
