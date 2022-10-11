import { Categoria } from './../category.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    name: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.categoria).subscribe((respota) => {
      console.log(respota)
      this.router.navigate(['categorias'])
      this.service.mensagem('category successfully created! ');
    }, err => {
     // debugger 
    // console.log(err.error.erros.length)

      for(let i = 0; i < err.error.erros.length; i++) {
        
        this.service.mensagem(err.error.erros[i].massage)
      }
     // console.log(err.error.erros[0].massage, 'error')
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

  



}
