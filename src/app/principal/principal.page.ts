import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  categoria;
  title = 'Visita guiada';
  titles = {
    'visita':'Visita guiada',
    'cesco' : 'Conocé el CESCO',
    'casleo': 'Conocé el CASLEO',
    'pampa' : 'Conocé La Pampa El Leoncito',
    'mineria': 'Minería en San Juan',
    'pachon' : 'El pachón'
  }
  
  constructor() { }

  ngOnInit() {
  }

  cambiaCategoria(categoria: string) {
    this.categoria = categoria;
  }

  cambiarCategoria(cat: string) {
    this.title =this.titles[cat];
    this.categoria = cat;
  }
}
