import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RiddleComponent } from './riddle.component';

@NgModule({
  declarations: [RiddleComponent],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class RiddleModule {}
