import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Tecnico/listar/listar.component';
import { AddComponent } from './Tecnico/add/add.component';
import { DetalleComponent } from './Tecnico/destalle/detalle.component';
import { CrearComponent } from './servicio/crear/crear.component';


const routes: Routes = [
    {
        path: 'listar' , component: ListarComponent
    },
    {
        path: 'add', component: AddComponent
    },
    {
        path: 'add/:id', component: AddComponent
    },
    {
        path: 'editar', component: DetalleComponent
    },
    {
        path: 'listarServicio/:id', component: DetalleComponent
    },
    {
        path: 'crearServicio', component: CrearComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
