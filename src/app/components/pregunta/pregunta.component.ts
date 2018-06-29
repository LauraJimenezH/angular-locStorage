import { Component, OnInit, Input } from '@angular/core';

import { DatosService } from '../../services/datos.service'
import { Pregunta } from '../../models/Pregunta'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  @Input('pregunta') pregunta: Pregunta;

  constructor(public datosService: DatosService) { }

  ngOnInit() {
  }

  borrarPregunta(pregunta) {
    this.datosService.borrarPregunta(pregunta);
  }

}
