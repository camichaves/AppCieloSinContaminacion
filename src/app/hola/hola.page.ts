import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  constructor(public navCtrl: NavController,private router: Router, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }
  goToMain() {
    console.log("Hola desde gotoMain");
    let options: NativeTransitionOptions = {
      duration: 1000,
    }
    this.nativePageTransitions.fade(options);
    this.navCtrl.navigateRoot('principal');
  }

}
