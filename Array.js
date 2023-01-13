const log = console.log;

log("Arr------------");
const arr = [1, 2, 3];

for (const a of arr) {
  log(a);
}

log("Set------------");
const set = new Set([1, 2, 3]);

for (const a of set) {
  log(a);
}

log("Map------------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const a of map) {
  log(a);
}
