import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrossconfigPage } from './crossconfig.page';
import { GridsizerComponent } from './gridsizer/gridsizer.component';
import { WordsinputComponent } from './wordsinput/wordsinput.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CrossconfigPage
      }
    ])
  ],
  declarations: [CrossconfigPage, GridsizerComponent, WordsinputComponent]
})
export class CrossconfigPageModule { }
