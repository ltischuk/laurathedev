import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule, HomeRoutingModule, MatDividerModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
