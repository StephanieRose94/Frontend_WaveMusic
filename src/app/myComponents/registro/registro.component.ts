/* import { EquipoService } from "./../../equipo.service"; */

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Usuarios } from "src/modulo/usuario.module";
import { UserService } from "src/app/Servicios/usuarios.service";

@Component({
  selector: "registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  /* listaUsuario: any = []; */
  //people: Usuarios[] = [];
  people= {nombre:"", correo:"", password:""};
  //people: any
  /* constructor(private builder: FormBuilder,
            private equipo: EquipoService) { } */

  constructor(
    private builder: FormBuilder,
    private usuariosservice: UserService
  ) {}
  /* registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  }); */

  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  /*  getEquipo(): Observable<EquipoService[]>{
    return this.http.get<EquipoService[]>('https://jsonplaceholder.typicode.com/posts') // https://jsonplaceholder.typicode.com/posts
  } */

  enviar(registerForm) {
    console.log(registerForm.name)
    this.people.nombre = registerForm.name;
    this.people.correo = registerForm.email;
    this.people.password = registerForm.password;
    console.log(this.people);
    this.usuariosservice.crearUsuarios(this.people).subscribe(response => {
      alert("Se creo el registro correctamente.");
    });
  }
  /* 
  enviar(registerInfo) {
    this.listaUsuario = registerInfo;

    this.equipo.crearPost(this.listaUsuario).subscribe(response => {
      alert("se creó usuario correctamente");
      this.obtenerCanciones() 
    });
  } */

  ngOnInit() {}
}

/* export class FormularioRegistroComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private usuariosservice: UserService
  ) {}

  ngOnInit() {}

  userForm = this.builder.group({
    nombre: ["", Validators.required],
    edad: [""],
    correo: [""],
    contraseña: [""]
  });
  people: Usuarios[] = [];
  enviar(userForm) {
    this.people = userForm;

    this.usuariosservice.crearUsuarios(this.people).subscribe(response => {
      alert("Se creo el registro correctamente.");
    });
  }
} */
