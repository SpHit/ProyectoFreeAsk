import { Categoria } from './categoria.modelo';
import { Usuario } from './usuario.modelo';

export class Post{
    PostId: number;
    Texto: string;
    Sexo: string;
    Fecha: string;
    NomUsuario: string;

    verComentarios: boolean;
    verAddComentario: boolean;

    IdUsuario: number;
    IdCategoria: number;
    NomCategoria: string;
}