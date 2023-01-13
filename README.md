# Javascript-FP

Functional programming to Javascript ES6+

## 평가

- 코드가 계산(Evaluation)되어 값을 만드는 것

  ```javascript
  log(1 + 2); // 3

  log([1, 2]); //배열로 평가

  log([1, 2, [3, 4]]); //[1, 2 , [Array[2]]]

  log([1, 2, ...[3, 4]]); //[1, 2, 3, 4]
  ```

## 일급

- 값으로 다룰 수 있다.
- 변수에 담을 수 있다.
- 함수의 인자로 사용될 수 있다.
- 함수의 결과로 사용될 수 있다.

  ```javascript
  const a = 10;

  const add10 = (a) => a + 10;

  add10(a);

  const r = add10(a);
  log(r); //20
  ```

## 일급 함수

- 함수를 값으로 다룰 수 있다.
- 조합성과 추상화의 도구이다.

  ```javascript
  const add = (a) => a + 5;

  log(add); // a => a + 5
  log(add(5)); //10 평가 후 결과로 전달

  const f1 = () => () => 1; // 함수를 return
  log(f1()); // () => 1

  const f2 = f1();
  log(f2); // () => 1
  log(f2()); // 1 원하는 시점에 평가
  ```

## 고차 함수

- 함수를 값으로 다루는 함수를 고차함수라 하는데  
  두가지 종류가 있음.

  - ### 함수를 인자로 받아서 실행하는 경우

    ```javascript
    const apply1 = (f) => f(1); // const apply1 = (f) => a => a + 2(1)
    const add2 = (a) => a + 2;

    log(apply1(add2)); // 3
    log(apply1((a) => a - 1)); // 0

    const times = (f, n) => {
      let i = -1;
      while (++i < n) f(i);
    };

    times(log, 3); // 0 1 2
    times((a) => log(a + 10), 3); // 10 11 12
    //Applicative programming
    ```

  - ### 함수를 만들어 리턴하는 경우 (클로저를 만들어 리턴)

    ```javascript
    const addMaker = (a) => (b) => a + b;
    // b => a + b 는 a를 기억하고 있다.
    const add10 = addMaker(10);
    log(add10); // b => a + b

    log(add10(5)); // 15
    log(add10(10)); // 20
    ```
