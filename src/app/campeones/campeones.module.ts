import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CampeonesRoutingModule } from './campeones-routing.module';
import { CampeonesComponent } from './campeones/campeones.component';
import { CardsComponent } from '../components/cards/cards.component';


@NgModule({
  declarations: [
    CampeonesComponent,
    CardsComponent  
  ],
  imports: [
    CommonModule,
    CampeonesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CampeonesModule { }
