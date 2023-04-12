// 제너레이터: 이터레이터 이자 이터러블을 생성하는 함수
const log = console.log;

function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
  return 100;
}
const iter = gen();
// log(iter.next());
// log(iter[Symbol.iterator]() == iter);
// log(iter.next());
// log(iter.next());
// log(iter.next());

for (const a of gen()) log(a, "for of");


// odds
function* odd(limit){
  for (const a of limiter(limit , infinity())) {
    if (a % 2) yield a;
    if (a == limit) return;
  }
  // for (let i = 0; i < limit; i++){
  //   if(i % 2) yield i;
  // }
}

function* infinity(i = 0){
  while (true) yield i++;
}

function* limiter(l , iter){
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}

let iterOdd = odd(10)
let iterInfinity = infinity();
let iterLimiter = limiter();

for (const a of odd(50)) log(a , 'odds')

// 구조분해
log(...odd(10));
log([...odd(5) , ...odd(10)]);

const [head , ...tail] = odd(5);
log(head , tail)

const [a , b , ...rest] = odd(10);
console.log(a); // 1
console.log(b); // 3
console.log(rest); // 5 7 9