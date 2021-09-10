const a1 = [1, 2, 3, 4, 5];

const reversa = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    const aux = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = aux;
  }
  return arr;
};

console.table({ a1, reversa: reversa(a1) });

const a2 = [1, 2, 3, 4, 5];

const girar = (arr, n) => {
  const plazos = Math.abs(n) % arr.length;
  if (n > 0) {
    for (let i = 0; i < plazos; i++) {
      const temp = arr[arr.length - 1];
      for (let k = arr.length - 2; k >= 0; k--) {
        arr[k + 1] = arr[k];
      }
      arr[0] = temp;
    }
  } else {
    for (let i = 0; i < plazos; i++) {
      const temp = arr[0];
      for (var k = 1; k < arr.length; k++) {
        arr[k - 1] = arr[k];
      }
      arr[arr.length - 1] = temp;
    }
  }
  return [...arr];
};

console.table({
  a2,
  girar1: girar(a2, 1),
  girar2: girar(a2, 2),
  "girar-1": girar(a2, -1),
});
