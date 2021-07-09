function contarACien(texto, despuesDeCien) {
  let cien = 0;
  for (let i = 0; i <= 100; i++) {
    cien = i;
  }
  const num = despuesDeCien(cien);
  return `${texto}: ${num}`;
}

function multiplicarPor(n1, n2) {
  return n1 * n2;
}

function anadir(n1, n2) {
  return n1 + n2;
}

function multiplicarPor5(n) {
  return multiplicarPor(n, 5);
}

const ejemplo1 = contarACien("ejemplo 1", multiplicarPor5);
const ejemplo2 = contarACien("texto", function (num) {
  return num - 5;
});
const ejemplo3 = contarACien("Mas 12", (num) => anadir(num, 12));

// console.table({ ejemplo1, ejemplo2, ejemplo3 });

const arr = [1, 2, 3, 4, 5];

const aumentarPor1 = (v) => console.log(v + 1);

arr.forEach(aumentarPor1);
// arr.forEach((v) => console.log(v + 1));

const ninja = "Libby";
setTimeout(function () {
  // console.log({ ninja2: ninja });
}, 2000); // corre la función definida después de 2000 millisegundos
// console.log({ ninja1: ninja });

function numeroDePlatos(fecha) {
  let dia;
  if (typeof fecha === "function") dia = new Date(fecha());
  else dia = new Date(fecha);

  return { platos: dia.getDay() * 10, segundos: dia.getTime() };
}

const platosPara1 = numeroDePlatos("25-dec-1999");
const platosPara2 = numeroDePlatos(1459183600000);
const hoy = () => new Date().getTime();
let platosPara3 = numeroDePlatos(hoy);
setTimeout(() => {
  platosPara3 = numeroDePlatos(hoy);
  console.table({ platosPara3 });
}, 2000);

// console.table({ platosPara1, platosPara2, platosPara3 });

// import { mkdir, writeFile, readFile } from "fs";

// Infierno de callbacks
// mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//   if (err) throw err;
//   readFile("/aqui", (err, data) => {
//     if (err) throw err;
//     const nuevoPath = data.charAt(2);
//     writeFile(nuevoPath, "foooo", (err) => {
//       if (err) throw err;
//       // iniciar programa
//     });
//   });
// });
