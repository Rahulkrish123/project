import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  @ViewChild('panel', { static: true }) private sidePanel: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.setSidePanel( this.sidePanel);
  }

  get selectedPortal(): Portal<any> {
    return this.sidenavService.selectedPortal;
  }

}
