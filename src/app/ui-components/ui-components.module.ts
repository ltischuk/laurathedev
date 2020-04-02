import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatToolbarModule],
  exports: [NavbarComponent]
})
export class UiComponentsModule {}
