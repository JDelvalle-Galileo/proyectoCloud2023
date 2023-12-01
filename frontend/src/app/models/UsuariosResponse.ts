import { Usuario } from "./Usuario";

export class UsuariosResponse{
    status:number;
    mensaje:string;
    usuarios:Usuario[];

    constructor(status:number, mensaje:string, usuarios:Usuario[]){
        this.status = status;
        this.mensaje = mensaje;
        this.usuarios = usuarios;
    }
}