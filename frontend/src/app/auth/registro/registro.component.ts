import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ValidarPass } from '../validarpass';

export class usuario {
  nombre: string;
  pass: string;
  email: string;
}

export class nombre {
  nombre: string;
}

export class email {
  email: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})



export class RegistroComponent implements OnInit {
  registroform: FormGroup;
  usuario: usuario;
  pasarNombre: nombre;
  pasarEmail: email;
  compararNombre: string;
  compararEmail: string;

  constructor(private authService: AuthService, private fb: FormBuilder, private ruta: Router) { }

  ngOnInit(): void {
    this.registroform = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirmarpass: ['', []]
    }, {
        validator: ValidarPass.comprobarPass
      })
  }

  registrarse() {
    this.pasarNombre = new nombre();
    this.pasarEmail = new email();
    this.pasarNombre.nombre = this.registroform.get('usuario').value;
    this.pasarEmail.email = this.registroform.get('email').value;
    this.authService.compararNombre(this.pasarNombre).subscribe((resultado: any) => {
      this.compararNombre = resultado[0].Nombre;
      this.comprobar();
    });
    this.authService.compararEmail(this.pasarEmail).subscribe((resultado: any) => {

      this.compararEmail = resultado[0].Correo;
      this.comprobar();
    });
  }


  comprobar() {

    if (this.registroform.get('usuario').value != this.compararNombre) {
      if (this.registroform.get('email').value != this.compararEmail) {
        if (!this.registroform.get('confirmarpass').valid || !this.registroform.get('confirmarpass').valid) {
          alert("Las contraseñas no son iguales");
        } else {
          this.usuario = new usuario();
          this.usuario.nombre = this.registroform.get('usuario').value;
          this.usuario.email = this.registroform.get('email').value;
          this.usuario.pass = btoa(this.registroform.get('pass').value);
          if (!this.usuario.email.includes('@') || (!this.usuario.email.includes('.'))) {
            alert("Introduce un email válido");
          } else {
            this.authService.addUsuario(this.usuario).subscribe((resultado: any) => {
              this.ruta.navigate(['/login']);
            });
          }
        }
      } else {
        alert("Email ya registrado");
      }
    } else {
      alert("El usuario ya se encuentra registrado");
    }
  }
}
