import { Comic } from "./Comic";

export class UsuariosResponse{
    status:number;
    mensaje:string;
    comics:Comic[];

    constructor(status:number, mensaje:string, comics:Comic[]){
        this.status = status;
        this.mensaje = mensaje;
        this.comics = comics;
    }
}