import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  cargandoHidden = true;
  @ViewChild('splash', { static: false}) splash: ElementRef;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private androidFullScreen: AndroidFullScreen
  ) { }
  
  ngOnInit(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      
      setTimeout(() => {
        this.cargandoHidden = false;
      }, 8000);
    });

    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => {
      console.log('Immersive mode supported');
      this.androidFullScreen.immersiveMode();
    })
    .catch(err => console.log(err));

  }
}
