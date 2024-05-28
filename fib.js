function fibs(num) {
  let fib = [];
  for (let i = 0; i < num; i++) {
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

function fibsRec(num) {
  const fib = [];
  let count = 0;
  function hidden(count) {
    if (count >= num) {
      return fib;
    } else if (count <= 1 && fib.length <= 1) {
      fib.push(count);
    } else {
      let lastIndex = fib.length - 1;
      let previousIndex = fib.length - 2;
      let nextNumber = fib[lastIndex] + fib[previousIndex];
      fib.push(nextNumber);
    }
    return hidden(count + 1);
  }

  return hidden(count);
}

console.clear();
console.log("\n FIBONACCI SEQUENCE WITH FOR LOOP:\n");

console.log(` fibs(1) -> ${fibs(1)}`);
console.log(` fibs(2) -> ${fibs(2)}`);
console.log(` fibs(3) -> ${fibs(3)}`);
console.log(` fibs(8) -> ${fibs(8)}`);
console.log(` fibs(15) -> ${fibs(15)}\n`);

console.log("\n FIBONACCI SEQUENCE USING RECURSION:\n");

console.log(` fibsRec(1) -> ${fibsRec(1)}`);
console.log(` fibsRec(2) -> ${fibsRec(2)}`);
console.log(` fibsRec(3) -> ${fibs(3)}`);
console.log(` fibsRec(8) -> ${fibsRec(8)}`);
console.log(` fibsRec(15) -> ${fibsRec(15)}\n`);
