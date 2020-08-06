import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hola',
    pathMatch: 'full'
  },
  {
    path: 'hola',
    loadChildren: () => import('./hola/hola.module').then( m => m.HolaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },  {
    path: 'video360',
    loadChildren: () => import('./video360/video360.module').then( m => m.Video360PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
