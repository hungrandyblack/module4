import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'admin/products',
    loadChildren: () => import('./admin-product/admin-product.module').then(module => module.AdminProductModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
