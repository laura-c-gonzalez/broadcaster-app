import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevDirective } from '../multi-slide/prev.directive';
import { NextDirective } from '../multi-slide/next.directive';


@NgModule({
  declarations: [
    PrevDirective,
    NextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrevDirective,
    NextDirective
    ]
})
export class AllInOneModuleModule { }
