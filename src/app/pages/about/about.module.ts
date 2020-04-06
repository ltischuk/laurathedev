import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutmeComponent } from './aboutme.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [CommonModule, AboutRoutingModule, FlexLayoutModule, MatCardModule],
})
export class AboutModule {}
