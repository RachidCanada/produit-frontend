import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: any[] = []; // Stocker la liste des produits

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits(); // Charger les produits au démarrage
  }

  loadProduits(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }

  addProduit(nom: string, prix: number): void {
    const produit = { nom, prix };
    this.produitService.addProduit(produit).subscribe(() => {
      this.loadProduits();
    });
  }

  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.loadProduits();
    });
  }
}
