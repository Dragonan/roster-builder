import { NgModule } from '@angular/core';
import { MatButtonModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule
  ],
})
export class AppMaterialModule { }
