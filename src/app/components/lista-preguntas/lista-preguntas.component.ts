import { Component, OnInit } from '@angular/core';

import { DatosService } from '../../services/datos.service'
import { Pregunta } from '../../models/Pregunta'

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css']
})
export class ListaPreguntasComponent implements OnInit {
  preguntas: Pregunta[];

  constructor(public datosService: DatosService) {}

  ngOnInit() {
    this.preguntas = this.datosService.obtenerPreguntas();
  }

  agregarPregunta(pregunta: Pregunta) {
    // console.log(pregunta);
    this.datosService.agregarPregunta(pregunta);
  }

}
