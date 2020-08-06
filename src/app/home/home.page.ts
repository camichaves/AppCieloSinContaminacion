import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController,} from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  rutaimg = '../../assets/imgs/video.PNG';
  titles = {
    'visita':'Visita guiada',
    'cesco' : 'Conocé el CESCO',
    'casleo': 'Conocé el CASLEO',
    'pampa' : 'Conocé La Pampa El Leoncito',
    'mineria': 'Minería',
    'pachon' : 'El pachón'
  };
  urls = {
    'visita':'../../assets/visita360.mp4',
    'cesco' : '../../assets/cesco.mp4',
    'casleo': '../../assets/casleo.mp4',
    'pampa' : '../../assets/leoncito.mp4',
    'mineria': '../../assets/mineria.mp4',
    'pachon' : '../../assets/video.mp4'
  }

  

  @ViewChild('videoElement', { static: false}) video: ElementRef;
  @Output() opcion = new EventEmitter();
  @Input() opt;
  @Input() title;
  @Input() rutavideo;
  @Input() player;
  @Input() videoMina;
  mostrarBotones = true;
  constructor(private route: ActivatedRoute,
              private menuController: MenuController,
              private webview: WebView) {
              this.title ="Visita guiada";
              this.opt = 'visita';
              this.videoMina = 1;
              this.rutavideo = '../../assets/imgs/video.mp4';
            }

  cambiarVideo(opt: string) {
    this.opt = opt;
    this.title =this.titles[opt];
    // this.rutavideo = this.webview.convertFileSrc(this.urls[opt]);
    this.rutavideo = this.urls[opt];
    console.log('Cambiando de categoria a :' + opt);
  }
  ngOnInit(): void {
    this.opt = 'visita';
  }

  mandarEvento() {
    this.opcion.emit(this.opt);
  }

  esconderIconos(player) {
    if(player)  this.player = player;
    this.player.height('450px')
    console.log('Video andando');
    this.mostrarBotones = false;
  }

  mostrarIconos(player) {
    if(player)  this.player = player;
    this.player.height('360px');
    console.log('Video no andando ');
    this.mostrarBotones = true;
  }
}
