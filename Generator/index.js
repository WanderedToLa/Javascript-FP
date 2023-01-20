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
