import { Injectable } from '@angular/core';

import { Pregunta } from '../models/Pregunta'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  preguntas: Pregunta[]

  constructor() { 
    // this.preguntas = [
    //   {
    //     texto: 'Cual es tu nombre?',
    //     respuesta: 'Laura',
    //     esconder: true
    //   },
    //   {
    //     texto: 'Cual es color favorito?',
    //     respuesta: 'Negro',
    //     esconder: true
    //   },
    //   {
    //     texto: 'Cual es tu super héroe favorito?',
    //     respuesta: 'Ironman',
    //     esconder: true
    //   }
    // ]
  }

  obtenerPreguntas(){
    if(localStorage.getItem('preguntas') == null){
      this.preguntas = [];
    }else{
      this.preguntas = JSON.parse(localStorage.getItem('preguntas'));
    }
    return this.preguntas;
  }

  agregarPregunta(pregunta: Pregunta) {
    this.preguntas.unshift(pregunta);

    let preguntas;
    if(localStorage.getItem('preguntas') == null){
      preguntas = [];

      preguntas.unshift(pregunta);
      localStorage.setItem('preguntas', JSON.stringify(preguntas));

    }else{
      preguntas = JSON.parse(localStorage.getItem('preguntas'));

      preguntas.unshift(pregunta);
      localStorage.setItem('preguntas', JSON.stringify(preguntas));      
    }
  }

  borrarPregunta(pregunta: Pregunta) {
    for(let i = 0; i < this.preguntas.length; i++){
      if(pregunta == this.preguntas[i]){
        this.preguntas.splice(i, 1);
        localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
      }
    }
  }

}
