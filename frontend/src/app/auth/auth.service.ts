import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = "http://127.0.0.1:8080/api";

  constructor(private http: HttpClient) { }

  compararEmail(email){
    return this.http.post(this.api + '/CompararEmail.php', JSON.stringify(email));
  }

  compararNombre(nombre){
    return this.http.post(this.api + '/CompararNombre.php', JSON.stringify(nombre));
  }

  addUsuario(usuario){
    return this.http.post(this.api + '/Registrarse.php', JSON.stringify(usuario));
  }

  iniciarSesion(login){
    return this.http.post(this.api + '/IniciarSesion.php', JSON.stringify(login));
  }
}
