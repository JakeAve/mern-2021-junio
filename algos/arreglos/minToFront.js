const arr1 = [4, 2, 1, 3, 5, 0];

const getMinIdx = (arr) => {
  let idx = 0;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }

  return idx;
};

const minToFront = (arr) => {
  const idx = getMinIdx(arr);

  for (let i = idx; i > 0; i--) {
    const t = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = t;
  }
  return arr;
};

console.table({ arr1, res: minToFront(arr1) });
