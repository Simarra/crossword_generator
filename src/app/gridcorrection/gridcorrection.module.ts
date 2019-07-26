import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridcorrectionPage } from './gridcorrection.page';
import { GridcorrwidgetComponent } from './gridcorrwidget/gridcorrwidget.component';
import { DescriptionsComponent } from './../descriptions/descriptions.component'

const routes: Routes = [
  {
    path: '',
    component: GridcorrectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridcorrectionPage, GridcorrwidgetComponent, DescriptionsComponent]
})
export class GridcorrectionPageModule { }
