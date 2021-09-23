const rFact = (num) => {
  const tru = Math.trunc(num);
  if (tru <= 0) return 1;

  return tru * rFact(tru - 1);
};

console.table({
  "-1": rFact(-1),
  0: rFact(0),
  1: rFact(1),
  2: rFact(2),
  2.5: rFact(2.5),
  3: rFact(3),
  4: rFact(4),
  5: rFact(5),
  10: rFact(10),
});
