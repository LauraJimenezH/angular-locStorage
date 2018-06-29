import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaPreguntasComponent } from './components/lista-preguntas/lista-preguntas.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component'
import { DatosService } from './services/datos.service';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaPreguntasComponent,
    PreguntaComponent,
    AgregarPreguntaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
