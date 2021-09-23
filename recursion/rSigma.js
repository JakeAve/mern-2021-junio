const rSignma = (numero) => {
  if (numero <= 0) return 0; // guard clause

  return numero + rSignma(numero - 1);
};

console.table({
  "-1": rSignma(-1),
  0: rSignma(0),
  1: rSignma(1),
  2.5: rSignma(2.5),
  3: rSignma(3),
  4: rSignma(4),
  5: rSignma(5),
  10: rSignma(10),
});
