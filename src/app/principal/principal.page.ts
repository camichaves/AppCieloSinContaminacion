import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  categoria;
  constructor() { }

  ngOnInit() {
  }

  cambiaCategoria(categoria: string) {
    this.categoria = categoria;
  }

  cambiarCategoria(cat: string) {
    console.log('Cambiando');
    this.categoria = cat;
  }
}
