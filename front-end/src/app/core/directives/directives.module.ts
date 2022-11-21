import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPlaceHolderDirective } from './component-place-holder.directive';



@NgModule({
  declarations: [
    ComponentPlaceHolderDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[ComponentPlaceHolderDirective]
})
export class DirectivesModule { }
