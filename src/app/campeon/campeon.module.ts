import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeonRoutingModule } from './campeon-routing.module';
import { CampeonComponent } from './campeon/campeon.component';


@NgModule({
  declarations: [CampeonComponent],
  imports: [
    CommonModule,
    CampeonRoutingModule
  ]
})
export class CampeonModule { }
