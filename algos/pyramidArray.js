const pyramid = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const miniArr = [];
    for (let j = 0; j <= i; j++) miniArr.push(1);
    arr.push(miniArr);
  }
  return arr;
};

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
