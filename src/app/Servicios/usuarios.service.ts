import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuarios } from "src/modulo/usuario.module";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url =
    "http://localhost:3000/api/usuarios"; /* variable privada que solo sirve en este modulo */

  constructor(private _http: HttpClient) {}

  /* Metodo GET */
  getUsuarios(): Observable<Usuarios[]> {
    return this._http.get<Usuarios[]>(this.url);
  }
  crearUsuarios(user):Observable<any> {
    console.log(user);
    return this._http.post(this.url, user);
  }
}
 