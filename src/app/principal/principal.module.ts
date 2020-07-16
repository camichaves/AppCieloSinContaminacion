import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import {ComponentsModule} from '../components/components.module';
import {HomePageModule} from '../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrincipalPageRoutingModule,
        ComponentsModule,
        HomePageModule
    ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
