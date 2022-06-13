import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { NewcompComponent } from './newcomp.component'


@NgModule({
  declarations: [
    NewcompComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
    bootstrap: [NewcompComponent]
  })

export class NewcompModule {}
