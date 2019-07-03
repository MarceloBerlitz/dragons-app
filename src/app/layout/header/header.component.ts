import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  public logout: EventEmitter<void> = new EventEmitter<void>();

  public doLogout(): void {
    this.logout.emit();
  }

}
