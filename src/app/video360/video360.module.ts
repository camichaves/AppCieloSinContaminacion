import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Video360PageRoutingModule } from './video360-routing.module';

import { Video360Page } from './video360.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Video360PageRoutingModule
  ],
  declarations: [Video360Page]
})
export class Video360PageModule {}
