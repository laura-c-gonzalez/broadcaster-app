import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NextDirective } from './multi-slide/next.directive';
import { PrevDirective } from './multi-slide/prev.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NextDirective,
    PrevDirective],
  imports: [
    HttpClientModule
  ],
  exports: [
    NextDirective,
    PrevDirective
  ]
})
export class SharedServiceModule {}

