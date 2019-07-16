import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrossconfigPage } from './crossconfig.page';
import { GridsizerComponent } from './gridsizer/gridsizer.component';
import { WordsinputComponent } from './wordsinput/wordsinput.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CrossconfigPage
      }
    ])
  ],
  declarations: [CrossconfigPage, GridsizerComponent]
})
export class CrossconfigPageModule { }
