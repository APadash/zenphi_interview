import { Injectable, } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ComponentPlaceHolderDirective } from '../directives/component-place-holder.directive';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav!: MatDrawer;
  private placeHolder!: ComponentPlaceHolderDirective;

  constructor() { }

  public setSidenav(sidenav: MatDrawer, _placeHolder: ComponentPlaceHolderDirective) {
    this.sidenav = sidenav;
    this.placeHolder = _placeHolder;
  }

  public open(component: any, inputs: { [key: string]: any, status: boolean }) {
    this.placeHolder.viewContainerRef.clear();
    const CREATEDCOMPONENT = this.placeHolder.viewContainerRef.createComponent(component);

    for (const key in inputs) {
      (<any>CREATEDCOMPONENT.instance)[key] = inputs[key];
    }
    return this.sidenav.open();
  }


  public close() {
    this.placeHolder.viewContainerRef.clear();
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

}
