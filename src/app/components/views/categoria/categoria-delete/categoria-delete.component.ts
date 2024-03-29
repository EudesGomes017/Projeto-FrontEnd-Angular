import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../category.model';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
  //pegando id da url
  categoria: Categoria = {
    id: '',
    name: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.name = resposta.name
      this.categoria.descricao = resposta.descricao
      console.log(resposta)
    })
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('category deletes successfully')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }


cancel(): void {
  this.router.navigate(['categorias'])
}


}
