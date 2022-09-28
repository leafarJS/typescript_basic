console.log("Hola mundo");

// objeto javascript
let bicicleta = {
  color: "Rojo",
  modelo: "BMX",
  frenos: "Disco",
  velocidades: "60kh",
  cambiaColor: (nuevoColor) => {
    bicicleta.color = nuevoColor;
    console.log(bicicleta);
  },
};
// objeto javascript utilizando this
let automovil = {
  color: "Rojo",
  modelo: "BMX",
  frenos: "Disco",
  velocidades: "120kh",
  cambiaColor: function (nuevoColor) {
    this.color = nuevoColor;
    console.log(this);
  },
};
bicicleta.cambiaColor("Azul");
automovil.cambiaColor("cafe");
