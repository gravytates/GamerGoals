import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';
import { PCComponent } from './pc/pc.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';
import { MobileComponent } from './mobile/mobile.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'pc',
    component: PCComponent
  },
  {
    path: 'playstation',
    component: PlaystationComponent
  },
  {
    path: 'xbox',
    component: XboxComponent
  },
  {
    path: 'mobile',
    component: MobileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
