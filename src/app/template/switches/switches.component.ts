import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  persona = {
    genero: '',
    notificaciones: false,
  }

  terminosycondiciones: boolean = false;



  guardar(){

    console.log( this.miFormulario );
    
  }

  

}
