import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appComponentPlaceHolder]'
})
export class ComponentPlaceHolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
