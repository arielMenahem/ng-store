import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from './admin.component';
import { MatIconModule } from '@angular/material/icon';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
