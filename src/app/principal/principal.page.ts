import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  categoria;
  rutaVideo;

  title = 'Visita guiada';
  titles = {
    'visita':'Visita guiada',
    'cesco' : 'Conocé el CESCO',
    'casleo': 'Conocé el CASLEO',
    'pampa' : 'Conocé La Pampa El Leoncito',
    'mineria': 'Minería',
    'pachon' : 'El pachón'
  }
  urls = {
    'visita':'../../assets/visita360.mov',
    'cesco' : '../../assets/cesco.mp4',
    'casleo': '../../assets/casleo.mp4',
    'pampa' : '../../assets/leoncito.mp4',
    'mineria': '../../assets/mineria.mp4',
    'pachon' : '../../assets/video.mp4'
  }
  
  constructor() { }

  ngOnInit() {
  }

  cambiaCategoria(categoria: string) {
    this.categoria = categoria;
  }

  cambiarCategoria(cat: string) {
    this.title =this.titles[cat];
    this.rutaVideo = this.urls[cat]
    this.categoria = cat;
  }
}
