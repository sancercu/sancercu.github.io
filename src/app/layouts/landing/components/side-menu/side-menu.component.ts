import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public opened = false;

  constructor(
    private sidenav: SidebarService
  ) { }

  ngOnInit() {
    this.sidenav.observeToggle().subscribe(value => {
      this.opened = value;
    });
  }

  public toggleOpened(): void {
    this.sidenav.toggle();
  }
}
