import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumdsComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumdsComponent, SidebarComponent, HeaderComponent],
})
export class SharedModule {}
