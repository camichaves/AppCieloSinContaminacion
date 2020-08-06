import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolaPageRoutingModule } from './hola-routing.module';

import { HolaPage } from './hola.page';
import { CargandoPageModule } from '../cargando/cargando.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolaPageRoutingModule,
    CargandoPageModule
  ],
  declarations: [HolaPage]
})
export class HolaPageModule {}
