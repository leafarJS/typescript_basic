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
var camiseta = new Camisetas("a", "b", "c", 10);
console.log(camiseta);
