import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Pour les appels HTTP
import { AppRoutingModule } from './app-routing.module'; // Fichier de routage
import { AppComponent } from './app.component'; // Assurez-vous du bon chemin
import { ProduitComponent } from './components/produit/produit.component'; // Chemin vers ProduitComponent

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent // Ajoutez vos composants ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Nécessaire pour le service HTTP
    AppRoutingModule // Importation du module de routage
  ],
  providers: [],
  bootstrap: [AppComponent] // Point de démarrage de l'application
})
export class AppModule {}
