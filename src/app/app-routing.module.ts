import { ProdutoDeleteComponent } from './components/views/livro/produto-delete/produto-delete.component';

import { LivroReadAllComponent } from './components/views/livro/produtos-read-all/produtos-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoryReadComponent } from './components/views/categoria/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosCreateComponent } from './components/views/livro/produtos-create/produtos-create.component';
import { ProdutosUpdateComponent } from './components/views/livro/produtos-update/produtos-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoryReadComponent
  },

  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },

  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },

  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },

  //path dos books
  {
    path: 'categorias/:id_cat/produtos',
    component: LivroReadAllComponent
  },

  {
    path: 'categorias/:id_cat/produtos/create',
    component: ProdutosCreateComponent
  },

  {
    path: 'categorias/:id_cat/produtos/:id/update',
    component: ProdutosUpdateComponent
  },

  {
    path: 'categorias/:id_cat/produtos/:id/delete',
    component: ProdutoDeleteComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
