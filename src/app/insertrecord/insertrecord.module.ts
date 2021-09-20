import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertrecordPageRoutingModule } from './insertrecord-routing.module';

import { InsertrecordPage } from './insertrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertrecordPageRoutingModule
  ],
  declarations: [InsertrecordPage]
})
export class InsertrecordPageModule {}
