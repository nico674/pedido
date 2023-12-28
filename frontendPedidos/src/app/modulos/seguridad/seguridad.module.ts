import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambiodeclaveComponent } from './cambiodeclave/cambiodeclave.component';
import { RecuperarclaveComponent } from './recuperarclave/recuperarclave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambiodeclaveComponent,
    RecuperarclaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
