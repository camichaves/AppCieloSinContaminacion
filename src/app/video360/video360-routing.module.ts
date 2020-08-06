import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Video360Page } from './video360.page';

const routes: Routes = [
  {
    path: '',
    component: Video360Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Video360PageRoutingModule {}
