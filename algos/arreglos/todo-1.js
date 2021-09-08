const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

// const pushAlFrente2 = (arr, val) => {
//   let a = arr[0];
//   let b = arr[1];

//   for (let i = 1; i < arr.length + 1 && a !== undefined; i++) {
//     arr[i] = a;
//     a = b;
//     b = arr[i + 1];
//   }
//   arr[0] = val;
//   return arr;
// };

// console.log({ res1: pushAlFrente2(arreglo1, 0) });

// console.log({ arreglo1 });

// const pushAlFrente3 = (arr, val) => {
//   for (let i = arr.length - 1; i >= 0; i--) arr[i + 1] = arr[i];
//   arr[0] = val;
//   return arr;
// };

// console.log({ res1: pushAlFrente3(arreglo1, 0) });

// console.log({ arreglo1 });

// const popAlFrente = (arr) => {
//   // [1,2,3]
//   // [2,3,3]
//   const val = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }

//   arr.pop();
//   return val;
// };

// console.log({ res1: popAlFrente(arreglo1) });
// console.log({ arreglo1 });

const arreglo3 = ["caro", "jake", "jake", "jake", "pedro", "tim", "tim"];

const eliminarDuplicados = (arr) => {
  let valUnico = arr[0];
  let idx = 1;
  for (let i = 1; i < arr.length; i++) {
    // ["caro", "jake", "jake", "jake", "pedro", "tim", "tim"];
    // ["caro", "jake", "pedro", "tim", "pedro", "tim", "tim"];
    if (arr[i] !== valUnico) {
      valUnico = arr[i];
      arr[idx] = arr[i];
      idx++;
    }
  }
  arr.length = idx;
};

// console.log({ res: eliminarDuplicados(arreglo3) });
// console.log({ arreglo3 });

// const eliminarDuplicados2 = (arr) => {
//   return [...new Set(arr)];
// };

// console.log({ res: eliminarDuplicados2(arreglo3) });
// console.log({ arreglo3 });

// [1,2,0,3,4,5]

// a = 1
// b = 2

// n[1] =
