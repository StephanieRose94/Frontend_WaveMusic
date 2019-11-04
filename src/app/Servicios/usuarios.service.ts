import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Usuarios } from "src/modulo/usuario.module";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url =
    "http://localhost:3000/api/usuarios"; /* variable privada que solo sirve en este modulo */

  constructor(private _http: HttpClient) {}
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  /* Metodo GET */
  getUsuarios(): Observable<Usuarios[]> {
    return this._http.get<Usuarios[]>(this.url);
  }
  
  crearUsuarios(user):Observable<any> {
    console.log(user);
    return this._http.post(this.url, user);
  }


  /* Metodo GET para Usuario por NOMBRE*/
  getUsuario(nomusuario): Observable<any>{
    return this._http.get(this.url+"/Usuario/"+nomusuario).pipe(
      map(this.extractData));
  }


}
 