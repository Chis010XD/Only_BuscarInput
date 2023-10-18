import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoCardlistComponent } from './segundo-cardlist/segundo-cardlist.component';



@NgModule({
  declarations: [
    PrimeroComponent,
    SegundoCardlistComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    PrimeroComponent,
    SegundoCardlistComponent
  ]
})
export class EcommerceAppModule { }
