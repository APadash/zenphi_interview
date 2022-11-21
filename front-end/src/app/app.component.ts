import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ComponentPlaceHolderDirective } from './core/directives/component-place-holder.directive';
import { SideNavService } from './core/service/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') sideNavRef!: MatDrawer;
  @ViewChild(ComponentPlaceHolderDirective, {static:false}) appComponentPlaceHolder!: ComponentPlaceHolderDirective;
  title = 'zenphi-front';

  constructor(private SideNavService: SideNavService) { }
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.SideNavService.setSidenav(this.sideNavRef,this.appComponentPlaceHolder);
  }
  


}
