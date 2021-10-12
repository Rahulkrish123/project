import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{Portal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  selectedPortal: Portal<any>;
  setSidePanel(sidePanel: MatSidenav) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
