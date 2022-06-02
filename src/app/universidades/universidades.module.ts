import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TarjetaComponent
  ]
})
export class UniversidadesModule { }
