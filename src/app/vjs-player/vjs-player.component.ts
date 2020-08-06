// vjs-player.component.ts
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter, AfterViewInit } from '@angular/core';
import videojs from 'video.js';
import 'videojs-vr/dist/videojs-vr.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
      height: string,
      width: string,
      poster: string,
      video360: boolean
      muted: string
  };
  player: videojs.Player;
  constructor(
    private elementRef: ElementRef,
  ) { 
    
  }

  mandarEvento(){
    console.log("mandando eventro")
  }

  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, () => {
      console.log('Using video.js ' + videojs.VERSION);
      // this.player.src(this.url);
      if(this.options.video360) this.player.vr({projection: '360'});
    });
    this.player.on('pause', ()=> {this.pause.emit(this.player)})
    this.player.on('play', ()=>{this.play.emit(this.player)})

  }
  
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}