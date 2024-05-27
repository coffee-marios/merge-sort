function fibs(num) {
  let fib = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      let lastIndex = fib.length - 1;
      let previousIndex = fib.length - 2;
      let nextNumber = fib[lastIndex] + fib[previousIndex];

      fib.push(nextNumber);
    }
  }
  return fib;
}

console.clear();
console.log("\n FIBONACCI SEQUENCE WITH FOR LOOP:\n");
console.log(` fibs(1) -> ${fibs(1)}`);
console.log(` fibs(8) -> ${fibs(8)}`);
console.log(` fibs(15) -> ${fibs(15)}`);
