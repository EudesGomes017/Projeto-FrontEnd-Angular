import { Categoria } from './../category.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    name: '',
    description: ''
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
      //for para pegar o a posição do vetor do error descrito no backAnd
      for(let i  = 0; i < err.error.erros.lenght; i++) {
        this.service.mensagem(err.error.erros[i].message);
      }
    })
  }

}
