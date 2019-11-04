import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CancioneslikedService {
  private url = "http://localhost:3000/api/cancionesliked"/* variable privada que solo sirve en este modulo */

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  /* Metodo GET para ROCK*/
  getCanciones(): Observable<any>{
    return this.http.get(this.url).pipe(
      map(this.extractData));
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
