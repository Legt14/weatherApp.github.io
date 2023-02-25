import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component:LayoutComponent
      },
    ],
  },
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WebsideRoutingModule { }
