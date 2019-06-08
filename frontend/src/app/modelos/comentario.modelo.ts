import { Usuario } from './usuario.modelo';
import { Post } from './post.modelo';

export class Comentario{
    ComentarioId: number;
    Texto: string;
    Fecha: string;

    UsuarioNombre: string;
    PostId: number;
    
}