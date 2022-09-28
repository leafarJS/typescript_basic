function getNumber(num: number) {
  return num + 10;
}

function getOtherNumber(num: number = 10): string {
  return `El numero es ${num + 10}`;
}

let numerico = (num: number) => {
  return num ** 10;
};

console.log(getNumber(25));
console.log(getOtherNumber(100));
console.log(numerico(100));
