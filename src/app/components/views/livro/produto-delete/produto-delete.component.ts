import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../prutos.model';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
  id_cat: String = ''

  

  produtos: Produtos = {
    id: '',
    title: '',
    name_estoque: '',
    text: '',
  }

  //Formulario Reativos        produto temq  ter no min 3 caracteres

 produto = new FormControl('', [Validators.minLength(3)])

 name_products = new FormControl('', [Validators.minLength(3)])

 text = new FormControl('', [Validators.minLength(10)])
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

  delete():void {
    this.service.delete(this.produtos.id!).subscribe(() => {
    this.router.navigate([`categorias/${this.id_cat}/produtos`]);
    this.service.mensagem('Produto deletado com sucesso')
    }, err => {
    this.router.navigate([`categorias/${this.id_cat}/produtos`]);
    this.service.mensagem('Erro ao Deletar o Produto! Tente mais tarde..')
    })
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/produtos`]);
  }

  //validação do forms
 getMessage() {
  if(this.produto.invalid) {
    return 'O campo produto deve conter entre 3 e 100 caracteres'
  }

  if(this.name_products.invalid) {
    return 'O campo name_products deve conter entre 3 e 100 caracteres'
  }

  if(this.text.invalid) {
    return 'O campo text deve conter entre 3 e 2.000.00 caracteres'
  }
  
  return false
}

 

}
