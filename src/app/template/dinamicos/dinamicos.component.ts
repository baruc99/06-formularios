import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  nuevoJuego: string = '';

  persona:Persona ={
    nombre: 'Baruc',
    favoritos: [
      { id: 1,  nombre: 'halo 3'},
      { id: 2,  nombre: 'gear of war 3'},
    ]
  }

  agregarJuego(){

    const juegoFavorito: Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego
    }
    
    this.persona.favoritos.push( {...juegoFavorito} );
    this.nuevoJuego = '';

  }

  guardar(){
    console.log( this.miFormulario );
    
  }

  eliminar( index: number ){
      this.persona.favoritos.splice(index, 1)
  }


}
