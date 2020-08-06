import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ComponentsModule} from '../components/components.module';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ComponentsModule
    ],
    exports: [
        HomePage
    ],
    declarations: [HomePage,VjsPlayerComponent]
})
export class HomePageModule {}
