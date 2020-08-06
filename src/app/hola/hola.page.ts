import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  cargandoHidden = true;
  @ViewChild('splash', { static: false}) splash: ElementRef;
  constructor(public navCtrl: NavController,
    private router: Router,
    private splashScreen: SplashScreen,
    private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.cargandoHidden = false;
    }, 8000);
  }

  goToMain() {
    console.log("Hola desde gotoMain");
    // let options: NativeTransitionOptions = {
    //   duration: 1000,
    // }
    // this.nativePageTransitions.fade(options);
    this.navCtrl.navigateRoot('principal');
  }

}
