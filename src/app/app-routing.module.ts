import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiddleComponent } from './riddle/riddle.component';

const routes: Routes = [
  { path: '', component: RiddleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
