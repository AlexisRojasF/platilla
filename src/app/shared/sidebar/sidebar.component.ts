import { Component, OnInit } from '@angular/core';
import { SedebarService } from '../../services/sedebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private serviceSidebar: SedebarService) {
    this.menuItems = serviceSidebar.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {}
}
