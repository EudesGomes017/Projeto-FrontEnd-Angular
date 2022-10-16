import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../prutos.model';

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {
 //criando uma variavel para buscar na inicialização
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
   this.id_cat = this.route.snapshot.paramMap.get('id_cat')!//pegando o id da categoria na url
   this.produtos.id = this.route.snapshot.paramMap.get('id')!//pegando id do produto

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
