import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './libro/listar/listar.component';
import { AddComponent } from './libro/add/add.component';
import { EditarComponent } from './libro/editar/editar.component';


const routes: Routes = [
 {path: 'listar', component: ListarComponent},
 {path: 'add', component: AddComponent},
{path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
