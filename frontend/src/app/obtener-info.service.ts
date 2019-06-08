import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './modelos/categoria.modelo';
import { Post } from './modelos/post.modelo';
import { Comentario } from './modelos/comentario.modelo';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInfoService {

  api = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.api}/api/MostrarTodasCategorias.php`);
  }

  getUltimasPublicaciones(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/MostrarUltimasPublicaciones.php`);
  }

  getUltimasPublicacionesOtros(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoOtros.php`);
  }

  getUltimasPublicacionesFamilia(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoFamilia.php`);
  }

  getUltimasPublicacionesReligion(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoReligion.php`);
  }

  getUltimasPublicacionesSalud(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoSalud.php`);
  }

  getUltimasPublicacionesTrabajo(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoTrabajo.php`);
  }

  getComentarios(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.api}/api/GetComentarios.php`);
  }

  addPost(post) {
    return this.http.post(this.api + '/api/addPost.php', JSON.stringify(post));
  }

  addComentarios(comentario){
    return this.http.post(this.api + "/api/addComentario.php", JSON.stringify(comentario));
  }
}
