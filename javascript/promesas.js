const hayUnError = false;

const promesaQueEspera2Segundos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Un mensaje" });
    console.log({ promesaQueEspera2Segundos });
  }, 2000);
  if (hayUnError) reject(new Error("Hubo un error"));
});

const promesaQueEspera2Segundos2 = (num, msg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: `Un mensaje con el número de magia: ${num} y el mensaje ${msg}`,
      });
      console.log({ promesaQueEspera2Segundos });
    }, 2000);
    if (hayUnError) reject(new Error("Hubo un error"));
  });

console.log(promesaQueEspera2Segundos);

promesaQueEspera2Segundos
  .then((val) => {
    const mensaje = `Exito, el mensaje es: ${val.data}`;
    console.log(mensaje);
    return mensaje;
  })
  .then((msg) => promesaQueEspera2Segundos2(Math.random(), msg))
  .then((resultado) => console.log(resultado))
  .catch(console.error)
  .finally(() => console.log(`Todo terminado`));
