import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'contenidoMiLista',
  templateUrl: './contenido-mi-lista.component.html',
  styleUrls: ['./contenido-mi-lista.component.css']
})
export class ContenidoMiListaComponent implements OnInit {

  title = 'wave';
  album1 = [
    {id: 1, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img: '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 2, Cancion: 'Joanne', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 3, Cancion: 'Million Reasons', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 4, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 5, Cancion: 'Joanne', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 6, Cancion: 'Million Reasons', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'}
  ]

  BorrarCancion(genero) {

    
    let index = this.album1.indexOf(genero)
    this.album1.splice(index, 1)

  }

  like=false

  Like(genero){
    let index = this.album1.indexOf(genero)
    if(genero.like == false){
      genero.like = true
    }else{
      genero.like = false 
    }
  
    console.log(index)
  }
  



  handleSearch(value: string) {
    this.filtro_valor = value;
  }
  filtro_valor = "";
  usuarios = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((users: any[]) => (this.usuarios = users));
    console.log(this.usuarios);
  }

}
