var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// clase hija
var Polera = /** @class */ (function (_super) {
    __extends(Polera, _super);
    function Polera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capucha = true;
        return _this;
    }
    Polera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Polera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Polera;
}(Camisetas));
var instancia = new Camisetas("a", "b", "c", 10);
console.log(instancia);
var instancia_1 = new Polera("x", "y", "z", 10);
instancia_1.setCapucha(false);
instancia_1.modelo = "Moderno";
console.log(instancia_1);
