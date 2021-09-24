///// Simple function to kick off the recursive version, with default
// values for the number of opens pending (0), the substring fragment
// we've built so far (""), and the array of complete solutions ([]).
function allValidNParens(numParens) {
  var solutions = [];
  rValidNParens(numParens, 0, "", solutions);
  return solutions;
}

///// Recursive All-Valid-Combinations-Of-N-Pairs-Parentheses func.
// Parameters: number of parens remaining, number of opens pending,
// unfinished substring fragment we're building, array of solutions
function rValidNParens(parens, opens, subStr, solutions) {
  // If no parens/opens remain, this fragment is a valid solution.
  if (!parens && !opens) {
    solutions.push(subStr);
  }
  // If opens remain, one option is to close one.
  if (opens) {
    rValidNParens(parens, opens - 1, subStr + ")", solutions);
  }
  // If unused parens remain, one option is to open a new one.
  if (parens) {
    rValidNParens(parens - 1, opens + 1, subStr + "(", solutions);
  }
  // solutions array is a 'live' obj; we don't need to return it.
}

console.log(allValidNParens(3));

// const rBinarySearch = (arr, num) => {
//   console.log({ arr, num });
//   if (arr[0] && arr[0] === num) return true;
//   else if (arr.length) {
//     arr.shift();
//     return rBinarySearch(arr, num);
//   } else return false;
// };

const rBinarySearch = (arr, val) => {
  const mid = Math.round(arr.length / 2);
  const midVal = arr[mid];
  if (midVal === val) return true;
  if (val < midVal) return rBinarySearch(arr.slice(0, mid), val);
  if (val > midVal) return rBinarySearch(arr.slice(mid), val);

  return false;
};

console.time("tiempo para rBinarySearch");
const uno = rBinarySearch([1, 3, 5, 6], 4);
const dos = rBinarySearch([4, 5, 6, 8, 12], 5);
console.timeEnd("tiempo para rBinarySearch");
// console.table({ uno, dos });

const rGCF = (param1, param2) => {
  if (param1 === param2) return param1;
  if (param1 > param2) {
    if ((param1 / param2) % 1 === 0) return param2;
    return rGCF(param1 - param2, param2);
  }
  if (param1 < param2) {
    if ((param2 / param1) % 1 === 0) return param1;
    return rGCF(param1, param2 - param1);
  }
};

// param1 = 18, param2 = 24
// p1 = 18, p2 = 6
// p1 = 12, p2 = 6
// p1 = 6, p2 = 6

console.time("tiempo para rGCF");
console.table({
  "5 y 10": rGCF(5, 10),
  "18 y 24": rGCF(18, 24),
  "51 y 7": rGCF(51, 7),
  "123456 y 987654": rGCF(123456, 987654),
  "100379 y 10507372583": rGCF(100379, 10507372583), // 104677
});
console.timeEnd("tiempo para rGCF");
