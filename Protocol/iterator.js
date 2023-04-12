const log = console.log;

// 이터러블 / 이터레이터 프로토콜

const arr = [1, 2, 3];

// arr[Symbol.iterator] = null;
// for (const a of arr) log(a); // error -> iterator 의 규약을 따르지 못함

let iterator = arr[Symbol.iterator]();
iterator.next(); // { value: 1 , done: false }

// 사용자 정의 이터러블

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0
          ? { done: true }
          : {
              value: i--,
              done: false,
            };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator2 = iterable[Symbol.iterator]();
for (const a of iterator2) log(a, "hi");
// log(iterator2.next(), "iter2");
// log(iterator2.next(), "iter2");
// log(iterator2.next(), "iter2");
// log(iterator2.next(), "iter2");

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();

// iter.next(); iterator 를 진행 시키다가 순회 가능
for (const a of iter2) log(a); // 1 , 2 ,3

/**
 * iter2 또한 Symbol.iterator 를 가지고 있고 실행한 값은 자기자신이며 iterator가
 * 자기자신을 반환하는 Symbol.iterator를 가지고 있을 때
 * well-formed iterator / well-formed iterable 이라고 함.
 */
log(iter2[Symbol.iterator]() == iter2); // true
