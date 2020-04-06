import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
