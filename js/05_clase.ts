// clase modelo del objeto
class Camisetas {
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

//let tipoCamiseta = new Camisetas("rojo", "sport", "nike", 100);

//tipoCamiseta.setColor("Rojooooo");

/* tipoCamiseta.setColor("rojo");
tipoCamiseta.modelo = "sport";
tipoCamiseta.marca = "nike";
tipoCamiseta.precio = 100; */

//console.log(tipoCamiseta);

//let sportCamiseta = new Camisetas("verde", "formal", "adidas", 120);

//sportCamiseta.setColor("Amarillo");

/* portCamiseta.setColor("blanco");
sportCamiseta.modelo = "camisola";
sportCamiseta.marca = "adidas";
sportCamiseta.precio = 125; */

//console.log(sportCamiseta);
