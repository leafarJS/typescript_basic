// clase modelo del objeto
var Camisetas = /** @class */ (function () {
    // Metodos funciones o acciones del objeto
    function Camisetas(color, modelo, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    return Camisetas;
}());
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
