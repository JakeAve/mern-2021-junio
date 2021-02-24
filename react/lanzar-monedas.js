// function tossCoin() {
//   return Math.random() > 0.5 ? "heads" : "tails";
// }

// function fiveHeadsSync() {
//   let headsCount = 0;
//   let attempts = 0;
//   console.time("lanzar");
//   while (headsCount < 5) {
//     attempts++;
//     let result = tossCoin();
//     console.log(`${result} was flipped`);
//     if (result === "heads") {
//       headsCount++;
//     } else {
//       headsCount = 0;
//     }
//   }
//   console.timeEnd("lanzar");
//   return `It took ${attempts} tries to flip five "heads"`;
// }

// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

// new Promise {
//   constructor (callback/funcción) {

//   }

//   then()
//   catch()
//   finally()
// }

// const num = 5;

// const y = () =>
//   new Promise((resolve, reject) => {
//     if (num === 5) resolve("éxito");
//     else reject(new Error("Error fatal"));
//   });

// y().then((res) => console.log(`El mensaje fue ${res}`))

// console.log({ y });

const tossCoin = () => (Math.random() > 0.5 ? "heads" : "tails");

const fiveHeadsSync = () => {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts++;
      if (attempts > 100) reject(new Error("Más de 100 intentos"));
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    resolve(`Tomó ${attempts} intentos para sacar 5 "heads" seguidos`);
  });
};

fiveHeadsSync()
  .then((msj) => console.log(msj))
  .catch((err) => console.error(err));

const fiveHeadsAsync = async () => {
  try {
    const msj = await fiveHeadsSync();
    console.log(`Async await ejemplo ${msj}`);
  } catch (err) {
    console.error(err);
  }
};

fiveHeadsAsync();
