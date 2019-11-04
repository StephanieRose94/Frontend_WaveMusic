import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CancionesService} from '../../Servicios/canciones.service';
import {CancioneslikedService} from '../../Servicios/cancionesliked.service';
import { from } from 'rxjs';


@Component({
  selector: 'generoRock',
  templateUrl: './genero-rock.component.html',
  styleUrls: ['./genero-rock.component.css']
})
export class GeneroRockComponent implements OnInit {

  cancionlikedpost = {album:"",artista:"",duracion:"",genero:"",src:"",titulo:""};
  resultcancionlikedpost : any;

  canciones: any;
  


  album1 = [
    {id: 1, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img: '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 2, Cancion: 'Joanne', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 3, Cancion: 'Million Reasons', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 4, Cancion: 'Diamond Heart', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 5, Cancion: 'Joanne', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'},
    {id: 6, Cancion: 'Million Reasons', artista: 'Lady Gaga', img:  '../assets/img/janelle.jpg', audio:'../assets/audio/lg-million-reasons.mp3'}
  ]
  //album1:any;

  constructor(public restliked:CancioneslikedService, public rest:CancionesService, private _http: HttpClient) {

  }




  title = 'wave';
  

  BorrarCancion(genero) {

    
    let index = this.album1.indexOf(genero)
    this.album1.splice(index, 1)

  }

  like=false

  Like(genero){
    

    this.cancionlikedpost.album = genero.album;
    this.cancionlikedpost.artista = genero.artista;
    this.cancionlikedpost.duracion = genero.duracion;
    this.cancionlikedpost.genero = genero.genero;
    this.cancionlikedpost.src = genero.src;
    this.cancionlikedpost.titulo = genero.titulo;

    this.restliked.crearCanciones(this.cancionlikedpost).subscribe((result) => {
      // this.productData = result;
       this.resultcancionlikedpost = result;
       console.log(result);
       //this.router.navigate(['/product-details/'+result._id]);
     }, (err) => {
       console.log(err);
     });
 

    console.log(this.cancionlikedpost)

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

  

  ngOnInit() {
    this._http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((users: any[]) => (this.usuarios = users));
    console.log(this.usuarios);


    this.rest.getCancionesRock().subscribe((result) => {
      // this.productData = result;
       this.canciones = result;
       console.log(result);
       console.log(this.canciones)
       
       //this.router.navigate(['/product-details/'+result._id]);
     }, (err) => {
       console.log(err);
     });



  }


  /* Back-end Media player */

reproducir(genero) {
  document.querySelector('audio').id = genero.id
  document.querySelector('audio').src = genero.audio
  document.querySelector('audio').play()
/*  document.getElementById(genero.id).play() */

}

next() {
  let id = parseInt(document.querySelector('audio').id) /* tomo el id actual */
  let newId = (id + 1)  /* incremento en 1 */
  document.querySelector('audio').id = newId.toString() /* asigno el nuevo id */
  this.album1.forEach((index) => { //ciclo que recorre el json
    if (index.id === newId) { //
      document.querySelector('audio').src = index.audio
      document.querySelector('audio').play()
    }
   
   if(newId == this.album1.length){
      let fin = this.album1.length
      
      
    } 
  })
}
  prev() {
    let id = parseInt(document.querySelector('audio').id) /* tomo el id actual */
    let newId = (id -1 )  /* decremento en 1 */
    document.querySelector('audio').id = newId.toString() /* asigno el nuevo id */
    this.album1.forEach((index) => { //ciclo que recorre el json
      if (index.id === newId) { //
        document.querySelector('audio').src = index.audio
        document.querySelector('audio').play()
      }
      if(newId == 0){
        document.querySelector('audio').id = '1'
      }
      console.log(newId)
    })

  }



 

}
