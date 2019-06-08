import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './modelos/post.modelo';
import { Categoria } from './modelos/categoria.modelo';

@Injectable({
  providedIn: 'root'
})
export class OtrosService {

  api = "http://127.0.0.1:8080";

  constructor(private http:HttpClient) { }

  getUltimasPublicacionesOtros(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}/api/GetTodoOtros.php`);
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.api}/api/MostrarTodasCategorias.php`);
  }
}
