import { Component, OnInit } from '@angular/core';
import { Post } from '../modelos/post.modelo';
import { Categoria } from '../modelos/categoria.modelo';
import { ObtenerInfoService } from '../obtener-info.service';
import { Comentario } from '../modelos/comentario.modelo';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  postform: FormGroup;
  comentform: FormGroup;
  publicacion: Post;
  comentario: Comentario;
  verComentarios: boolean;
  verAddComentario: boolean;
  comentarios: Comentario[] = [];

  categorias: Categoria[];
  posts: Post[];

  logeado: boolean;

  nombreLogeado: string;

  constructor(private obtenerinfoService: ObtenerInfoService, private fb: FormBuilder, private ruta: Router) { }

  ngOnInit() {
    this.obtenerinfoService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    })

    this.obtenerinfoService.getUltimasPublicacionesSalud().subscribe((resultado: Post[]) => {
      this.posts = resultado;
    })

    this.obtenerinfoService.getComentarios().subscribe((resultado: Comentario[]) => {
      this.comentarios = resultado;
    })

    this.crearFormulario();
    this.crearCommentForm();

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }

  crearFormulario() {
    if (!this.logeado) {
      this.postform = this.fb.group({
        NomUsuario: ['', [Validators.required, Validators.minLength(3)]],
        Texto: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
        Sexo: ['', [Validators.required]],
        IdCategoria: ['', [Validators.required]]
      })
    } else {
      this.postform = this.fb.group({
        Texto: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
        Sexo: ['', [Validators.required]],
        IdCategoria: ['', [Validators.required]]
      })

    }
  }

  crearCommentForm() {
    this.comentform = this.fb.group({
      Texto: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  mostrarComentarios(p: Post) {
    if (p.verComentarios == false) {
      if (p.verAddComentario == true) {
        p.verAddComentario = false;
      }
      p.verComentarios = true;
    } else {
      p.verComentarios = false;
    }
  }

  mostrarAddComentario(p: Post) {
    if (p.verAddComentario == false) {
      if (p.verComentarios == true) {
        p.verComentarios = false;
      }
      p.verAddComentario = true;
    } else {
      p.verAddComentario = false;
    }
  }

  publicar() {
    if (this.logeado) {
      this.publicacion = new Post();

      this.publicacion.Texto = sessionStorage.getItem('session') + "||" + this.postform.get('Texto').value;
      this.publicacion.Sexo = this.postform.get('Sexo').value;
      this.publicacion.IdCategoria = this.postform.get('IdCategoria').value;

      this.obtenerinfoService.addPost(this.publicacion).subscribe((resultado: any) => {
        location.reload();
      })
    }
    else {
      this.publicacion = new Post();
      this.publicacion.NomUsuario = this.postform.get('NomUsuario').value;
      this.publicacion.Texto = this.postform.get('Texto').value;
      this.publicacion.Sexo = this.postform.get('Sexo').value;
      this.publicacion.IdCategoria = this.postform.get('IdCategoria').value;

      this.obtenerinfoService.addPost(this.publicacion).subscribe((resultado: any) => {
        location.reload();
      })
    }

  }

  addComment(p: Post) {
    this.comentario = new Comentario();
    this.comentario.Texto = this.comentform.get('Texto').value;
    this.comentario.PostId = p.PostId;
    this.comentario.UsuarioNombre = sessionStorage.getItem('session');

    this.obtenerinfoService.addComentarios(this.comentario).subscribe((resultado: any) => {
      location.reload();
    })
  }


  cerrarSesion() {
    if (this.logeado) {
      this.comprobarSesion();
      this.logeado = false;
      sessionStorage.clear();
      this.ruta.navigate(['/inicio']);
      location.reload();
    }
  }

  comprobarSesion() {
    if (sessionStorage.getItem('session')) {
      this.logeado = true;
    } else {
      this.logeado = false;
    }
    console.log(this.logeado);
  }

}
