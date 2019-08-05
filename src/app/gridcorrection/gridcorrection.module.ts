import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridcorrectionPage } from './gridcorrection.page';
import { GridcorrwidgetComponent } from './gridcorrwidget/gridcorrwidget.component';
import { DescriptionModule } from '../descriptions/descriptions.module';

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
    DescriptionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridcorrectionPage, GridcorrwidgetComponent]
})
export class GridcorrectionPageModule { }
