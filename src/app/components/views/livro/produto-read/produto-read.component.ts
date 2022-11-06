import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../prutos.model';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  id_cat: String = ''

  

  produtos: Produtos = {
    id: '',
    title: '',
    name_estoque: '',
    text: '',
  }
  
  constructor(private service: ProdutosService, private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;//pegando o id da categoria na url
    this.produtos.id = this.route.snapshot.paramMap.get('id')!;//pegando id do produto
    this.findById()
   
  }
 
  
  findById(): void {
   this.service.findById(this.produtos.id!).subscribe(( resposta) => {
     this.produtos = resposta
   })
  }
 
  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/produtos`]);
  }
 

}
