import { Usuario } from "./Usuario";

export class LoginResponse{
    status:number;
    mensaje:string;
    usuario:Usuario[];
    usuario_valido:number;

    constructor(status:number, mensaje:string, usuario:Usuario[],usuario_valido:number){
        this.status = status;
        this.mensaje = mensaje;
        this.usuario = usuario;
        this.usuario_valido = usuario_valido
    }
}