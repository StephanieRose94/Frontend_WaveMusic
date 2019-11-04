/* import { EquipoService } from "./../../equipo.service"; */

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Usuarios } from "src/modulo/usuario.module";
import { UserService } from "src/app/Servicios/usuarios.service";
import {Router} from "@angular/router"

@Component({
  selector: "registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  /* listaUsuario: any = []; */
  //people: Usuarios[] = [];
  people= {nombre:"", correo:"", password:""};
  usuario: any;
  //people: any
  /* constructor(private builder: FormBuilder,
            private equipo: EquipoService) { } */

  constructor(
    private builder: FormBuilder,
    private usuariosservice: UserService,
    private router: Router
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

  ValidarUsuario(email,contrasena){
    console.log(email)
    console.log(contrasena)

    this.usuariosservice.getUsuario(email).subscribe((result) => {
      // this.productData = result;
       this.usuario = result;
       //console.log(result);
       console.log(this.usuario)
       this.CompararPasswords(contrasena,this.usuario[0])
       //this.router.navigate(['/product-details/'+result._id]);
     }, (err) => {
       console.log(err);
     });
  }

  CompararPasswords(ingresado,leido){
    console.log(ingresado,leido)

    if (ingresado == leido.password){

      if(leido.role == "regular"){
        alert("Es un usuario regular")
        this.router.navigate(['/tendencias'])
      }
      if(leido.role == "admin"){
        alert("Es un Administrador")
        this.router.navigate(['/admin'])
      }


    }else{
      alert("Usuario o contraseña incorrecto, login failed");
    }


  }




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
