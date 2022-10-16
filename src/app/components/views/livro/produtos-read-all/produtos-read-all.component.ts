import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Produtos } from './../prutos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './produtos-read-all.component.html',
  styleUrls: ['./produtos-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  id_cat: String = "";

 produtos: Produtos[] = []


  displayedColumns: string[] = ['id', 'title', 'produtos', 'action'];

  constructor(private service: ProdutosService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.produtos = resposta;
      console.log(this.produtos)
    });
  }

  navegarparacriarprodutos(): void {
    this.router.navigate([`categorias/${this.id_cat}/produtos/create`])
    
  }



}
