import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { EliminarPersonasComponent } from './personas/eliminar-personas/eliminar-personas.component';
import { BuscarPersonasComponent } from './personas/buscar-personas/buscar-personas.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';


@NgModule({
  declarations: [
    CrearPersonasComponent,
    EditarPersonasComponent,
    EliminarPersonasComponent,
    BuscarPersonasComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    EliminarProductosComponent,
    BuscarProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
