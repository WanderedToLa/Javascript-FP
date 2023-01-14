const log = console.log;

const arr = [1, 2, 3];
log(arr[Symbol.iterator]) = null;

for (const a of arr) log(a); // error -> iterator 와 연관이 있다.
