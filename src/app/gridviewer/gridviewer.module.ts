import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridviewerPage } from './gridviewer.page';
import { GridwidgetComponent } from './gridwidget/gridwidget.component'

const routes: Routes = [
  {
    path: '',
    component: GridviewerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridviewerPage, GridwidgetComponent]
})
export class GridviewerPageModule {}
