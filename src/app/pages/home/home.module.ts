import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, HomeRoutingModule, MatDividerModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
