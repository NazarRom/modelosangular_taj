export class Producto {
    public nombre: string;
    public imagen: string;
    public precio: number;

    // creamos un constructor para recibir los parametros del producto
    constructor(name:string,imagen:string,price:number){
        this.nombre = name;
        this.imagen = imagen;
        this.precio = price;
    }
}