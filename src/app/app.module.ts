import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {CargandoPageModule} from './cargando/cargando.module';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';


import { WebView } from '@ionic-native/ionic-webview/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule, CargandoPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AndroidFullScreen,
    WebView
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
