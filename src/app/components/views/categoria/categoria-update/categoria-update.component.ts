import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Categoria } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  //chamando do ngModel
  categoria: Categoria = {
    id: '',
    name: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.categoria.id = this.route.snapshot.paramMap.get('id')! //id passando para nossa categoria
    this.findById()// quando iniciar vai passar o id 
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.name = resposta.name
      this.categoria.descricao = resposta.descricao
    })
  }


  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('successfully updated category')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    })
  }


  cancel(): void {
    this.router.navigate(['categorias'])
  }

}
