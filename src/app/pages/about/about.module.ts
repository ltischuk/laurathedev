import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutmeComponent } from './aboutme.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [CommonModule, AboutRoutingModule, MatCardModule, MatDividerModule],
})
export class AboutModule {}
