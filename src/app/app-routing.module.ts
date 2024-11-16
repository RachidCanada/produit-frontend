import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';

const routes: Routes = [
  { path: '', redirectTo: '/produits', pathMatch: 'full' }, // Redirection par défaut
  { path: 'produits', component: ProduitComponent } // Route vers Produits
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
