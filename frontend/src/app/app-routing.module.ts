import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtrosComponent} from './otros/otros.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SaludComponent } from './salud/salud.component';
import { ReligionComponent } from './religion/religion.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { FamiliaComponent } from './familia/familia.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [
  {path : '', redirectTo: '/inicio', pathMatch: 'full'},
  {path : 'inicio', component: CategoriaComponent},
  {path : "Otros", component : OtrosComponent},
  {path : "Salud", component: SaludComponent},
  {path : "Religión", component: ReligionComponent},
  {path : "Trabajo", component: TrabajoComponent},
  {path : "Familia", component: FamiliaComponent},
  {path : "login", component: LoginComponent},
  {path : "registro", component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
