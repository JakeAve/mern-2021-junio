const rTrib = (num) => {
  if (num <= 1) return 0;
  if (num === 2) return 1;
  return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
};

console.table({
  0: rTrib(0),
  1: rTrib(1),
  2: rTrib(2),
  3: rTrib(3),
  4: rTrib(4),
  5: rTrib(5),
  6: rTrib(6),
});
