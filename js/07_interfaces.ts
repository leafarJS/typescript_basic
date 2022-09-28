//interfaces
interface CamisetaBase {
  setColor(color: string);
  getColor();
}

// clase modelo del objeto
class Camisetas implements CamisetaBase {
  // Propiedades caracteristicas del objeto
  private color: string;
  public modelo: string;
  public marca: string;
  public precio: number;

  // Metodos funciones o acciones del objeto
  constructor(color, modelo, marca, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;
  }

  public setColor(color: string) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }
}

let camiseta = new Camisetas("a", "b", "c", 10);
console.log(camiseta);
