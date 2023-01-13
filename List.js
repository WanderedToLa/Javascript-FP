const log = console.log;

// ES5
const arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  log(arr[i]);
}

//ES6
for (const a of arr) {
  log(a);
}
