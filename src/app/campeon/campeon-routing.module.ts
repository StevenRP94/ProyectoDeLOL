import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonComponent } from './campeon/campeon.component';


const routes: Routes = [
  { path: 'campeon/:id', component: CampeonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampeonRoutingModule { }
