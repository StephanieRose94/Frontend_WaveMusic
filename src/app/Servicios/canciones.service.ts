import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Canciones } from '../../modulo/cancion.module'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  private url = "http://localhost:3000/api/canciones"/* variable privada que solo sirve en este modulo */

  constructor(private http: HttpClient) { }

  /* Metodo GET */
  getCanciones(): Observable<Canciones[]>{
    return this.http.get<Canciones[]>(this.url)
  }

   /* METODO POST*/
   crearCanciones(cancion){
     return this.http.post(this.url, cancion)
   }
   actualizarCanciones(cancion){
     /* return this.http.put(this.url, JSON.stringify(post)) */
     return this.http.patch(`${this.url}/${cancion.id}`, cancion) /* metodo patch = necesita una referencia */
   }

  /* METODO DELETE*/
  borrarCancion(_id){
    return this.http.delete(`${this.url}/${_id}`)
  }

}
