// string
let cadena: string = "jorge rafael callejo flores";

// number
let numero: number = 1351;

// boolean
let opcion: boolean = false;

// Any
let cualquier_tipo: any = { casa: "grande", auto: "compacto" };

// array
let lenguajes: Array<string> = ["es", "en", "ch"];
let years: number[] = [10, 12, 13];
let cosas: any = ["string", true, 12, { nota: 15 }];

//opciones
let opciones: string | number = "rafael";
console.log(opciones);
opciones = 45;
console.log(opciones);

// indicar con un alias el tipo de dato
type stringNumber = string | number;

console.log(cadena, numero, opcion, cualquier_tipo, lenguajes, years, cosas);
