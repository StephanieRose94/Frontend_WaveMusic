
/* import { Post } from './myComponents/modulo/post.module';  */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /* vamos a poder manipular la info de un servidor  */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {


private url = 'https://jsonplaceholder.typicode.com/posts' 

constructor(private http: HttpClient) { }

/* getEquipo(url){
  return this.http.get(url)
} */

  /* MÉTODO GET */
/* getPosts(): Observable<Post[]>{
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts') // https://jsonplaceholder.typicode.com/posts
} */

  /* MÉTODO POST */
crearPost(post){
  return this.http.post(this.url, JSON.stringify(post)) /* convierte el texto plano en JSON */
}

  /* MÉTODO PUT/PATCH */
actualizarPost(post){
  //return this.http.put(this.url, JSON.stringify(post))
  return this.http.patch(`${this.url}/${post.id}`, 
  JSON.stringify({isActive: true}))
}

  /* MÉTODO DELETE */
borrarPost(post){
  return this.http.delete(`${this.url}/${post.id}`, post.id)
}
}