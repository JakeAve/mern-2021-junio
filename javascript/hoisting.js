let persona4;
console.table({ persona2, persona4 });

const persona1 = "maria";

var persona2 = "juan";

persona4 = "pedro";

let persona3 = "julio";

console.table({
  persona1,
  persona2,
  persona3,
  persona4,
});

var foo; // 'foo' es una declaración, es global y se eleva
function magic() {
  // 'magic()' también se eleva a la cima
  var foo; // aqui 'foo' es declarada dentro de 'magic()' y se eleva a la parte superior de su scope
  foo = "hello world"; // asignamos un valor a nuestra función scoped 'foo'
  console.log(foo); // lo registramos como 'hello world'
}
foo = "bar"; // aquí, asignamos un valor al 'foo' global'
magic(); // magic es llamada y se ejecuta la primera consola.log
console.log(foo); // finalmente registramos el foo global
