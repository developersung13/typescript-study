type Last = {
  <T>(arr: T[]): T;
};

type Prepend = {
  <T, M>(arr: (T | M)[], item: M): (T | M)[];
};

const last: Last = (arr) => arr[arr.length - 1];
const prepend: Prepend = (arr, item) => [item, ...arr];

const arr = [1, 5];
console.log(last(arr)); // true
const newArr = prepend(arr, true);
console.log(newArr); // [ true, 1, 5 ]
