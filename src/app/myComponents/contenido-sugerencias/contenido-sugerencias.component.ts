import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'contenidoSugerencias',
  templateUrl: './contenido-sugerencias.component.html',
  styleUrls: ['./contenido-sugerencias.component.css']
})
export class ContenidoSugerenciasComponent implements OnInit {

  title = 'wave';
  sugerencia = [
    {id: 1, Cancion: 'Red Red Wine', artista: 'UB40', img: '../assets/img/goldenhour.jpg', audio:'../../assets/mp3/UB40   Red Red Wine Lyrics!.mp3', like: false},
    {id: 2, Cancion: 'Just Friends', artista: 'Amy Winehouse', img: '../assets/img/goldenhour.jpg', audio:'../../assets/mp3/Amy Winehouse - Just Friends.mp3', like: false},
    {id: 3, Cancion: 'To love', artista: 'Habbits', img: '../assets/img/goldenhour.jpg', audio:'../../assets/mp3/Tove Lo - Stay High ft. Hippie Sabotage.mp3', like: false },
    {id: 4, Cancion: '', artista: 'UB40', img: '../assets/img/goldenhour.jpg', audio:'../../assets/mp3/UB40   Red Red Wine Lyrics!.mp3', like: false},
    {id: 5, Cancion: '', artista: 'Amy Winehouse', img: '../assets/img/goldenhour.jpg', audio:'../../assets/mp3/Amy Winehouse - Just Friends.mp3', like: false},
    
  ]




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
