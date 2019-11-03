import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contenidoReproductor',
  templateUrl: './contenido-reproductor.component.html',
  styleUrls: ['./contenido-reproductor.component.css']
})
export class ContenidoReproductorComponent implements OnInit {

  album1 = [
    {id: 1, Cancion: 'Red Red Wine', artista: 'UB40', img: '../../assets/img/album/hqdefault.jpg', audio:'../../assets/mp3/UB40   Red Red Wine Lyrics!.mp3', like: false},
    {id: 2, Cancion: 'Just Friends', artista: 'Amy Winehouse', img: '../../assets/img/album/albumamy.jpg', audio:'../../assets/mp3/Amy Winehouse - Just Friends.mp3', like: false},
    {id: 3, Cancion: 'To love', artista: 'Habbits', img: '../../assets/img/album/Tove_Lo_Habits.png', audio:'../../assets/mp3/Tove Lo - Stay High ft. Hippie Sabotage.mp3', like: false }
  ]

 /*  reproducir(cancion) {
    document.querySelector('audio').id = cancion.id
    document.querySelector('audio').src = cancion.src
     document.getElementById(cancion.id).play() 
  } */

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


  constructor() { }

  ngOnInit() {
  }

}