import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;

  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  public closeSidebar(): void {
    this.onCloseSidebar.emit();
  }

  constructor(private router: Router) {}

  goToRoute(routePath: string) {
    this.router.navigate([routePath]);
    this.closeSidebar();
  }
}
