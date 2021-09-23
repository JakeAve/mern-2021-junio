// Cuando una función tiene acceso a un variable desde un alcance ajena y lo encapsula dentro de sí, es un closure / clausula.
// Usamos cloures para crear funciones dynámicas y también para encapsular información privada.

function generarNumeroSuccesivo() {
  let num = 0;
  function logNum() {
    console.log(num);
  }
  num++;
  return logNum;
}

const number = generarNumeroSuccesivo();
// number();

const num2 = generarNumeroSuccesivo();
// num2();

// Una el ejemplo abajo en una entrevista

function creaSumador(x) {
  return function (y) {
    return x + y;
  };
}

const suma5 = creaSumador(5);
console.log(suma5(10));

const suma7 = creaSumador(7);
console.log(suma7(2));

// Se puede crear un variable privado

// self-calling function

var Counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* Muestra 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* Muestra 2 */
Counter.decrement();
console.log(Counter.value()); /* Muestra 1 */
