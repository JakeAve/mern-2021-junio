const rFib = (num) => {
  if (num <= 2) return 1;
  return rFib(num - 1) + rFib(num - 2);
};

console.table({
  0: rFib(0),
  1: rFib(1),
  2: rFib(2),
  3: rFib(3),
  4: rFib(4),
  5: rFib(5),
});
