import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
//IMPORTAMOS NUESTROS COMPONENTES


const routes: Routes = [/* aqui van los objetos y se pasan las rutas con sus componentes */
  {path:'',component:ShowComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
