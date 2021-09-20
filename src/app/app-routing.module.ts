import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Tecnico/listar/listar.component';
import { AddComponent } from './Tecnico/add/add.component';
import { EditarComponent } from './Tecnico/editar/editar.component';

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
        path: 'editar', component: EditarComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
