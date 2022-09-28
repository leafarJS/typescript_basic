"use strict";
exports.__esModule = true;
var _05_clase_1 = require("./05_clase");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new _05_clase_1.Camisetas("rojo", "sport", "nike", 100);
    };
    return Main;
}());
var main = new Main();
main.getCamiseta();
