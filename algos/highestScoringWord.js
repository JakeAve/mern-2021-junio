const alf = `abcdefghijklmnopqrstuvwxyz`;

const valDeLet = (l) => alf.indexOf(l) + 1;
const valDePal = (pal) => ({
  p: pal,
  val: pal.split("").reduce((t, l) => t + valDeLet(l), 0),
});

const high = (x) => {
  return x
    .split(" ")
    .map(valDePal)
    .sort((a, b) => b.val - a.val)[0].p;
};

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("aa b"));
