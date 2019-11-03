import { EquipoService } from './../../equipo.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

listaUsuario: any = []

  constructor(private builder: FormBuilder,
            private equipo: EquipoService) { }

  registerForm: FormGroup = this.builder.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required, Validators.maxLength(8)]
  })


/*  getEquipo(): Observable<EquipoService[]>{
    return this.http.get<EquipoService[]>('https://jsonplaceholder.typicode.com/posts') // https://jsonplaceholder.typicode.com/posts
  } */ 

  enviar(registerInfo){
    this.listaUsuario = registerInfo

    this.equipo.crearPost(this.listaUsuario)
    .subscribe(response =>{
      alert("se creó usuario correctamente")
     /*  this.obtenerCanciones() */
    })
  }



  ngOnInit() {
  }

}