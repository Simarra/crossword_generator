import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DescriptionsComponent } from './descriptions.component'

@NgModule({
  declarations: [DescriptionsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DescriptionsComponent
  ]
})
export class DescriptionModule { }
