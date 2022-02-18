import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  valeurCompteur: number = 0;

  //[resultat] cible de la liaison de données de la source "result"
  @Input() public resultat?: number;

  //modifCompteur = event transmis lors du clic sur bouton
  @Output() modifCompteur = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.valeurCompteur++;
    this.modifCompteur.emit({
      value: this.valeurCompteur
    });
  }
  
  decrementer() {
    this.valeurCompteur--;
    this.modifCompteur.emit({
      value: this.valeurCompteur
    });
  }

}
