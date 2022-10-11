
import { Categoria } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  
  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  //lista todas as categorias do nosso backend
  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);
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
