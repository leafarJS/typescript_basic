import { Camisetas } from "./05_clase";

class Main {
  constructor() {
    console.log("Aplicación cargada");
  }
  getCamiseta() {
    return new Camisetas("rojo", "sport", "nike", 100);
  }
}
let main = new Main();

main.getCamiseta();
