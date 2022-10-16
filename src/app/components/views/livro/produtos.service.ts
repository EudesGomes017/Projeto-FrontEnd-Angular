import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  //metodo que lista todos os produtos por determinada categoria 
  findAllByCategoria(id_cat: String): Observable<Produtos[]> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`
    return this.http.get<Produtos[]>(url)
  }

  //metodo para buscar as informações do id
  findById(id: String): Observable<Produtos> {
    const url = `${this.baseUrl}/produtos/${id}`
    return this.http.get<Produtos>(url)

  }


  //metodo update
  upDate(produto: Produtos): Observable<Produtos> {
    const url = `${this.baseUrl}/produtos/${produto.id}`
    return this.http.put<Produtos>(url, produto)

  }


  create(produto: Produtos, id_cat: String): Observable<Produtos> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`
    return this.http.post<Produtos>(url, produto)
  }


  mensagem(str: String): void {
    this._snack.open(`${str}`, // mensagem para usuario
     'ok', //quando clica no ok
     { horizontalPosition: 'end', //ao final da tela 
     verticalPosition: 'top', // topo da tela
     duration: 3000 // tempo que o snackbar vai fica na tela 
  }) 

  }





  
}
