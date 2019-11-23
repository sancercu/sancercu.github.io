import { Component, OnInit, HostListener, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sticky = false;
  public toggleMenu = true;

  constructor(
    private sidebar: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebar.observeToggle().subscribe(show => {
      this.toggleMenu = show;
    });
  }

  public toggle() {
    this.sidebar.toggle();
  }
}
