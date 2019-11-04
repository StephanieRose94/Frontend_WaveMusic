import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contenido-tendencias',
  templateUrl: './contenido-tendencias.component.html',
  styleUrls: ['./contenido-tendencias.component.css']
})


export class ContenidoTendenciasComponent implements OnInit {

    local = {nombre:""};


    title = "sliders";
    slide = [
      {
        id: 1,
        album: "Joanne",
        artista: "Lady Gaga",
        img: "../../../assets/img/aFuncionales/albumPop.png",
        bot: true
      },
      {
        id: 2,
        album: "Witness",
        artista: "Katy Perry",
        img: "../../../assets/img/aPop/pop2.jpg",
        bot: true
      },
      {
        id: 3,
        album: "Anti",
        artista: "Rihanna",
        img: "../../../assets/img/aPop/pop3.jpg",
        bot: true
      },
      {
        id: 4,
        album: "Lover",
        artista: "Taylor Swift",
        img: "../../../assets/img/aPop/pop4.jpg",
        bot: true
      }
    ];
  
    slide1 = [
      {
        id: 5,
        album: "Madame X",
        artista: "Madonna",
        img: "../../../assets/img/aPop/pop5.jpg",
        bot: true
      },
  
      {
        album: "Lemonade",
        artista: "Beyoncé",
        img: "../../../assets/img/aPop/pop6.jpg",
        bot: true
      },
  
      {
        album: "25",
        artista: "Adele",
        img: "../../../assets/img/aPop/pop7.jpg",
        bot: true
      },
  
      {
        album: "Dua Lipa",
        artista: "Dua Lipa",
        img: "../../../assets/img/aPop/pop8.jpg",
        bot: true
      }
    ];
  
    isValid = false;
    noisValid = true;
  
    boton(display) {
      this.isValid = true;
      this.noisValid = false;
    }
    boton1(display) {
      this.isValid = false;
      this.noisValid = true;
    }
  
    /* -------------------SLIDE 2----------------------- */
  
    slide2 = [
      {
        id: 6,
        album: "Abbey Road",
        artista: "The Beatles",
        img: "../../../assets/img/aFuncionales/albumRock.jpg",
        bot: false
      },
      {
        id: 7,
        album: "In Rainbows",
        artista: "Radiohead",
        img: "../../../assets/img/aRock/rock2.jpg",
        bot: false
      },
      {
        id: 8,
        album: "Dark Side of The Moon",
        artista: "Pink Floyd",
        img: "../../../assets/img/aRock/rock3.jpg",
        bot: false
      },
      {
        id: 9,
        album: "InnerSpeaker",
        artista: "Tame Impala",
        img: "../../../assets/img/aRock/rock4.jpg",
        bot: false
      }
    ];
  
    slide12 = [
      {
        id: 10,
        album: "Melody's Echo Chamber",
        artista: "Melody's Echo Chamber",
        img: "../../../assets/img/aRock/rock5.jpg",
        bot: false
      },
      {
        album: "Houses Of The Holy",
        artista: "Led Zeppelin",
        img: "../../../assets/img/aRock/rock6.jpg",
        bot: false
      },
      {
        album: "A Night at the Opera",
        artista: "Queen",
        img: "../../../assets/img/aRock/rock7.jpg",
        bot: false
      },
      {
        album: "Let It Bleed",
        artista: "The Rolling Stones",
        img: "../../../assets/img/aRock/rock8.jpg",
        bot: false
      }
    ];
  
    isValid2 = false;
    noisValid2 = true;
  
    boton2(display) {
      this.isValid2 = true;
      this.noisValid2 = false;
    }
    boton12(display) {
      this.isValid2 = false;
      this.noisValid2 = true;
    }
  
    /* ----------------SLIDE 3-------------------------- */
  
    slide3 = [
      {
        id: 11,
        album: "¡Metiendo mano!",
        artista: "Willie Colón y Rubén Blades",
        img: "../../../assets/img/aFuncionales/albumLatino.jpg",
        bot: true
      },
      {
        id: 12,
        album: "El mismo",
        artista: "ChocQuibTown",
        img: "../../../assets/img/aLatino/tropical2.jpg",
        bot: true
      },
      {
        id: 13,
        album: "La revancha del burro",
        artista: "Systema Solar",
        img: "../../../assets/img/aLatino/tropical3.jpg",
        bot: true
      },
      {
        id: 14,
        album: "Elegancia Tropical",
        artista: "Bomba Estéreo",
        img: "../../../assets/img/aLatino/tropical4.jpg",
        bot: true
      }
    ];
  
    slide13 = [
      {
        id: 15,
        album: "La tierra del Olvido",
        artista: "Carlos Vives",
        img: "../../../assets/img/aLatino/tropical5.jpg",
        bot: false
      },
      {
        album: "Buenos Hermanos",
        artista: "Ibrahim Ferrer",
        img: "../../../assets/img/aLatino/tropical6.jpg",
        bot: false
      },
      {
        album: "Bachata Rosa",
        artista: "Juan Luis Guerra",
        img: "../../../assets/img/aLatino/tropical7.jpg",
        bot: false
      },
      {
        album: "Joe Arroyo y La Verdad",
        artista: "Joe Arroyo",
        img: "../../../assets/img/aLatino/tropical8.jpg",
        bot: false
      }
    ];
  
    isValid3 = false;
    noisValid3 = true;
  
    boton3(display) {
      this.isValid3 = true;
      this.noisValid3 = false;
    }
    boton13(display) {
      this.isValid3 = false;
      this.noisValid3 = true;
    }
  
    /* --------------------SLIDE 4---------------------- */
  
    slide4 = [
      {
        id: 16,
        album: "Oasis",
        artista: "J Balvin y Bad Bunny",
        img: "../../../assets/img/aFuncionales/albumUrbana.jpg",
        bot: true
      },
      {
        id: 17,
        album: "Astroworld",
        artista: "Travis Scott",
        img: "../../../assets/img/aUrbana/urbana2.jpg",
        bot: true
      },
      {
        id: 18,
        album: "Good Kid, M.A.A.D City",
        artista: "Habbits",
        img: "../../../assets/img/aUrbana/urbana3.jpg",
        bot: true
      },
      {
        id: 19,
        album: "Invasion of Privacy",
        artista: "Cardi B",
        img: "../../../assets/img/aUrbana/urbana4.jpg",
        bot: true
      }
    ];
  
    slide14 = [
      {
        id: 20,
        album: "Doggystyle",
        artista: "Snoop Dogg",
        img: "../../../assets/img/aUrbana/urbana5.jpg",
        bot: false
      },
      {
        album: "Daytona",
        artista: "Pusha-T",
        img: "../../../assets/img/aUrbana/urbana6.jpg",
        bot: false
      },
  
      {
        album: "My Beautiful Dark Twisted Fantasy",
        artista: "Kanye West",
        img: "../../../assets/img/aUrbana/urbana7.jpg",
        bot: false
      },
  
      {
        album: "Midnight Marauders",
        artista: "A Tribe Called Quest",
        img: "../../../assets/img/aUrbana/urbana8.jpg",
        bot: false
      }
    ];
  
    isValid4 = false;
    noisValid4 = true;
  
    boton4(display) {
      this.isValid4 = true;
      this.noisValid4 = false;
    }
    boton14(display) {
      this.isValid4 = false;
      this.noisValid4 = true;
    }
  
    /* -------------------SLIDE 5----------------------- */
  
    slide5 = [
      {
        id: 21,
        album: "Birth of the Cool",
        artista: "Miles Davis",
        img: "../../../assets/img/aFuncionales/albumJazz.jpg",
        bot: true
      },
      {
        id: 22,
        album: "Scenery",
        artista: "Ryo Fukui",
        img: "../../../assets/img/aJazzBlues/jazz2.jpg",
        bot: true
      },
      {
        id: 23,
        album: "Return To Forever",
        artista: "Chick Corea",
        img: "../../../assets/img/aJazzBlues/jazz3.jpg",
        bot: true
      },
      {
        id: 24,
        album: "Piano Solo",
        artista: "Thelonious Monk",
        img: "../../../assets/img/aJazzBlues/jazz4.jpg",
        bot: true
      }
    ];
  
    slide15 = [
      {
        id: 25,
        album: "First Meditations",
        artista: "John Coltrane",
        img: "../../../assets/img/aJazzBlues/jazz5.jpg",
        bot: false
      },
      {
        album: "Ah-Um",
        artista: "Charles Mingus",
        img: "../../../assets/img/aJazzBlues/jazz6.jpg",
        bot: false
      },
      {
        album: "Head Hunters",
        artista: "Herbie Hancock",
        img: "../../../assets/img/aJazzBlues/jazz7.jpg",
        bot: false
      },
      {
        album: "Getz/Gilberto",
        artista: "João Gilberto",
        img: "../../../assets/img/aJazzBlues/jazz8.jpg",
        bot: false
      }
    ];
  
    isValid5 = false;
    noisValid5 = true;
  
    boton5(display) {
      this.isValid5 = true;
      this.noisValid5 = false;
    }
    boton15(display) {
      this.isValid5 = false;
      this.noisValid5 = true;
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

      this.local.nombre = localStorage.getItem("nombreUsuarioLogeado")

    }
  }
  