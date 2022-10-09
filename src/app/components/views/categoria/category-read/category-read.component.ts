import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../category.model';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'name', 'description', 'livros', 'action'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

findAll() {
  this.service.findAll().subscribe(resposta => {
    console.log(resposta);
    this.categorias = resposta;

  })
}


navegarParaCategoriaCreate() {
  this.router.navigate(["categorias/create"])
}




}


