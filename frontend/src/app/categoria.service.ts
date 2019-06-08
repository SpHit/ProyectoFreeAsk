import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './modelos/categoria.modelo';
import { Post } from './modelos/post.modelo';
import { Comentario } from './modelos/comentario.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  api = "http://127.0.0.1:8080";

  constructor(private http:HttpClient) {
   }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.api}/api/MostrarTodasCategorias.php`);
  }

  getUltimasPublicaciones(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/MostrarUltimasPublicaciones.php`);
  }
  
  
}
