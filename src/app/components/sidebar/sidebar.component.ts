import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

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

  constructor(private router: Router, public dialog: MatDialog) {}

  goToRoute(routePath: string) {
    this.router.navigate([routePath]);
    this.closeSidebar();
  }
  openLogin() {
    this.dialog.open(LoginComponent);
  }
}
