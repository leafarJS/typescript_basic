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

// clase hija
class Polera extends Camisetas {
  public capucha: boolean = true;

  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  }
  getCapucha(): boolean {
    return this.capucha;
  }
}

let instancia = new Camisetas("a", "b", "c", 10);
console.log(instancia);

let instancia_1 = new Polera("x", "y", "z", 10);
instancia_1.setCapucha(false);
instancia_1.modelo = "Moderno";
console.log(instancia_1);
