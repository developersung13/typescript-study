// Call SigNature Exaple
function sum(array: number[]): number {
  const tot = array.reduce((prev, curr) => prev + curr, 0);
  return tot;
}

console.log(sum([100, 200, 300]));
