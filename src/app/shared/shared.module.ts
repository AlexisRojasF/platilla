import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadcrumdsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],exports:[
    BreadcrumdsComponent,
    SidebarComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
