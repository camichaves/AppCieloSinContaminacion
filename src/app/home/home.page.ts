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
  @ViewChild('videoElement', { static: false}) video: ElementRef;
  @Output() opcion = new EventEmitter();
  @Input() opt;
  mostrarBotones = true;
  constructor(private route: ActivatedRoute,
              private menuController: MenuController) {}

  cambiarVideo(opt: string) {
    this.opt = opt;
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
