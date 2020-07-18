import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  rutaimg = '../../assets/imgs/video.PNG';
  rutavideo = '../../assets/imgs/video.mp4';
  titles = {
    'visita':'Visita guiada',
    'cesco' : 'Conocé el CESCO',
    'casleo': 'Conocé el CASLEO',
    'pampa' : 'Conocé La Pampa El Leoncito',
    'mineria': 'Minería en San Juan',
    'pachon' : 'El pachón'
  };

  @ViewChild('videoElement', { static: false}) video: ElementRef;
  @Output() opcion = new EventEmitter();
  @Input() opt;
  @Input() title;
  mostrarBotones = true;
  constructor(private route: ActivatedRoute,
              private menuController: MenuController) {
          this.title ="Visita guiada";
              }

  cambiarVideo(opt: string) {
    this.opt = opt;
    this.title =this.titles[opt];
    console.log('Cambiando de categoria a :' + opt);
  }
  ngOnInit(): void {
    this.opt = 'visita';
  }

  mandarEvento() {
    this.opcion.emit(this.opt);
  }

  esconderIconos() {
    console.log('Video andando');
    this.mostrarBotones = false;
  }

  mostrarIconos() {
    console.log('Video no andando');
    this.mostrarBotones = true;
  }
}
