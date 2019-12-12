import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonesComponent } from './campeones/campeones.component';


const routes: Routes = [
  { path: 'campeones', component: CampeonesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampeonesRoutingModule { }
