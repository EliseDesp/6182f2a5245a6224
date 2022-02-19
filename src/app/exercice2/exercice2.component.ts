import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('myinput') input: ElementRef<HTMLInputElement>;

 constructor() {

}

  ngOnInit() {
  }

  //Fonction exécutée lorsque l'événement d'écriture est détecté
  myFunction(){
    this.valeur = this.input.nativeElement.value; 
  }

}
