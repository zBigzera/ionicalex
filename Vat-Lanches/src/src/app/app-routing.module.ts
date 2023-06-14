import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'burguer',
    loadChildren: () => import('./burguer/burguer.module').then( m => m.BurguerPageModule)
  },
  {
    path: 'encomendas',
    loadChildren: () => import('./encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
