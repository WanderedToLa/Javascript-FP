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

map.keys(); //MapIterator { "a" , "b" , "c" }

for (const a of map) {
  log(a);
}

let a = map.keys();
a.next(); //{ value: "a" , done: false }

for (const a of map.keys()) log(a); // {"a" , "b" , "c"}
for (const a of map.values()) log(a); // {1 , 2 , 3}
for (const a of map.entries()) log(a); // {["a", 1] , ["b", 2] , ["c", 3]}
