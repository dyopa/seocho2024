// let count = 0; // 외부변수(오염우려)
// function counter() {
//   count += 1;
//   return count;
// }
// // 하나의 counter만 사용 가능

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter1()); // 3

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
console.log('current Iser Count=', counter3.count);
