import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { OtrosComponent } from './otros/otros.component';
import { ReligionComponent } from './religion/religion.component';
import { SaludComponent } from './salud/salud.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { FamiliaComponent } from './familia/familia.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    OtrosComponent,
    ReligionComponent,
    SaludComponent,
    TrabajoComponent,
    FamiliaComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
