import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class login {
  usuario: string;
  pass: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  login: login;

  constructor(private authService: AuthService, private fb: FormBuilder, private ruta: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      usuario: ['', Validators.required],
      pass: ['', Validators.required],

    });
  }

  enviar(){
    this.login = new login();
    this.login.usuario = this.loginform.get('usuario').value;
    this.login.pass = btoa(this.loginform.get('pass').value);
    this.authService.iniciarSesion(this.login).subscribe((resultado: any)=>{
      if (resultado != null){
        sessionStorage.setItem("session", resultado.nombre);
        this.ruta.navigate(['/inicio']);
      }else{
        alert("Usuario o contraseña incorrecto");
      }
    })
  }

}
