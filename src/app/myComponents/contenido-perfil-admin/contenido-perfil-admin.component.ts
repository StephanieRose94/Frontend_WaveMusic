import { Canciones } from './../../../modulo/cancion.module';
import { CancionesService } from './../../Servicios/canciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contenidoPerfilAdmin',
  templateUrl: './contenido-perfil-admin.component.html',
  styleUrls: ['./contenido-perfil-admin.component.css']
})
export class ContenidoPerfilAdminComponent implements OnInit {

  title = 'admin';
  songs= [
    {id: 1, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img:'../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3', duracion:"3:55"},
    {id: 2, Cancion: 'Joanne', artista: 'Lady Gaga', img: '../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3',  duracion:"3:55"},
    {id: 3, Cancion: 'Million Reasons', artista: 'Lady Gaga', img: '../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3',  duracion:"3:55"},
    {id: 4, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img: '../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3',  duracion:"3:55"},
    {id: 5, Cancion: 'Joanne', artista: 'Lady Gaga', img: '../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3',  duracion:"3:55"},
    {id: 6, Cancion: 'Million Reasons', artista: 'Lady Gaga', img: '../assets/img/goldenhour.jpg', audio:'../assets/audio/lg-million-reasons.mp3',  duracion:"3:55"}
  ]


  listaDeCanciones: any = []

  constructor(private cancionesservice: CancionesService) { }

  obtenerCanciones(){
    this.cancionesservice.getCanciones().subscribe(res=>{
      this.listaDeCanciones = res.canciones
      console.log(this.listaDeCanciones)
      console.log(this.listaDeCanciones[0].src)
    })
  }

  borrarCancion(_id: string){
    console.log(_id)
    if(confirm('Quieres Borrar esta Canción')){
      this.cancionesservice.borrarCancion(_id).
      subscribe(res=>{
        alert('Canción Eliminada!')
        this.obtenerCanciones()
      })
    }
  }

  ngOnInit() {
    this.obtenerCanciones()
  }

}