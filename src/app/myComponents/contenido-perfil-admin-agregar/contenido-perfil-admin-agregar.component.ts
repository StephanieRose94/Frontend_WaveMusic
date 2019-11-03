
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CancionesService } from '../../Servicios/canciones.service';
import { Canciones } from '../../../modulo/cancion.module'

@Component({
  selector: 'contenido-perfil-admin-agregar',
  templateUrl: './contenido-perfil-admin-agregar.component.html',
  styleUrls: ['./contenido-perfil-admin-agregar.component.css']
})
export class ContenidoPerfilAdminAgregarComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private cancionesservice: CancionesService) { }


  listaDeCanciones: Canciones[] = []

  /*   agregarForm = this.builder.group({
      addNewSong: ['', Validators.required],
      addArtist: ['', Validators.compose([Validators.required, Validators.email])],
      addNewMp3: ['', Validators.required],
      addImage: ['', Validators.required],
    }) */

    agregarForm = this.builder.group({
      titulo: ['', Validators.required],
      artista: ['', Validators.required],
      duracion: [''],
      genero: [''],
      album: ['', Validators.required],
      src: ['', Validators.required],
    })


    enviar(agregarForm) {
      console.log(agregarForm)
    this.listaDeCanciones = agregarForm
    console.log(this.listaDeCanciones)
      this.cancionesservice.crearCanciones(this.listaDeCanciones)
      .subscribe(response =>{
        alert('Se creo correctamente')
        
      }) 
     
    }


   /*  dejar todo en uno solo borrar crear eliminar update */
   
  
    ngOnInit() {
    }
  }