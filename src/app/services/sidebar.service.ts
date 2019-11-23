import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private toggler = new BehaviorSubject<boolean>(false);

  private togglerEmitter = new BehaviorSubject<boolean>(false);

  constructor() {}

  public observeToggle(): BehaviorSubject<boolean> {
    return this.toggler;
  }

  public toggle() {
    const value = !this.toggler.getValue();
    this.toggler.next(value);
  }

  public observeToggleEmitter(): BehaviorSubject<boolean> {
    return this.togglerEmitter;
  }

  public toggleEmitter() {
    const value = !this.togglerEmitter.getValue();
    this.togglerEmitter.next(value);
  }
}
