import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Pregunta } from '../../models/Pregunta';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {
  @Output() preguntaAgregada = new EventEmitter<Pregunta>();
  Pregunta
  pregunta: string;
  respuesta: string;

  constructor() { }

  ngOnInit() {
  }

  agregarPregunta() {
    this.preguntaAgregada.emit({texto: this.pregunta, respuesta: this.respuesta, esconder: true});
  }

}
