const quitarBlancos = (str) => {
  const arr = str.split(" ");
  return arr.join("");
};

const quitarBlancos2 = (str) => {
  return str.replace(/\s+/g, "");
};

const str1 = "Pl ayTha tF u nkyM usi c";

console.table({
  quitarBlancos: quitarBlancos(str1),
  quitarBlancos2: quitarBlancos2(str1),
});

const str2 = `0s1a3y5w7h9a2t4? 6! 8? 0`;

const obtenerDigitos = (str) => {
  const arr = str
    .split("")
    .filter((v) => v !== " " && Number(v) >= 0)
    .join("");

  return arr;
};

const obtenerDigitos2 = (str) => {
  const s = str.match(/\d/g).join("");
  return Number(s);
};

console.table({
  obtenerDigitos: obtenerDigitos(str2),
  obtenerDigitos2: obtenerDigitos2(str2),
});

const str3 = `no hay almuerzo gratis - Debes pagar por tu comida`;
const str4 = `En vivo desde Nueva York, es sábado por la noche!`;

const acronimos = (str) => {
  return str
    .split(" ")
    .map((pal) => pal[0])
    .join("")
    .toUpperCase();
};

const acronimos2 = (str) => {
  return str
    .match(/\b\w|-/g) // bug
    .join("")
    .toUpperCase();
};

console.table({
  acronimosa: acronimos(str3),
  acronimosb: acronimos(str4),
  acronimos2a: acronimos2(str3),
  acronimos2b: acronimos2(str4),
});

const str5 = `Amor, me estás volviendo loca`;

const contarNoCar = (str) => {
  return str.match(/\S/g).length;
};

contarNoCar2 = (str) => {
  return str.split(" ").join("").length;
};

console.table({
  contarNoCar: contarNoCar(str5),
  contarNoCar2: contarNoCar2(str5),
});

const arr1 = ["foo", "bar", "hello", "a"]; // ['hello']
const arr2 = ["foo", "bar", "hello"]; // ['foo', 'bar', 'hello']
const arr2 = ["foo", "bar", "hi"]; // ['foo', 'bar']
