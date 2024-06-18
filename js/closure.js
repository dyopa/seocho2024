// let count = 0; // 외부변수(오염우려)
// function counter() {
//   count += 1;
//   return count;
// }
// // 하나의 counter만 사용 가능

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

console.log('----상태유지');

function counter() {
  let count = 0;
  return function X() {
    count += 1;
    return count;
  };
}
const counter1 = counter();
const counter2 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

//-------------------------
function discount() {
  const dcRate = 0.1;
  return function X(price) {
    return price * dcRate;
  };
}

const items = [
  { item: '상품A', price: 32000 },
  { item: '상품B', price: 45000 },
];
const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(`${item}:${orgPrice}원-->${salePrice.toLocaleString()}원`);
}

console.log('----데이터 은닉 캡슐화');
//-----------------------------
function currentCount() {
  let currCount = 0;
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    },
    get count() {
      return currCount;
    },
  };
}
const actions = ['입장', '입장', '입장', '퇴장', '퇴장', '퇴장'];

const counter3 = currentCount();
for (const action of actions) {
  action === '입장' ? counter3.connect() : counter3.disconnect();
  console.log(`${action}-> 현재입장객: ${counter3.count}명`);
}
console.log('current User Count=', counter3.count);

console.log('----함수 팩토리');
//----------------------------

function Greeter(greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
}

const greetHello = Greeter('Hello');
const greetHi = Greeter('Hi');

greetHello('Alice');
greetHi('Bob');

console.log('----콜백 비동기');
//----------------------------

function fetchData(ur1) {
  fetch(ur1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
fetchData('https://api.example.com/data');

console.log('----모듈 패턴구현');
//--------------------------
const Module = (function () {
  let privateVariable = 'I am private';

  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

Module.publicMethod();
