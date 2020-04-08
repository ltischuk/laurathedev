import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, FlexLayoutModule, MatCardModule],
})
export class ContactModule {}
