const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

const fx = f2(Math.max);
const ret = fx(1, 3, 5, 7);

function samef2(f) {
  //위에 코드랑 같은데 표현 방식만 다른거야 화살표함수와 비교해봐 연습많이해
  return function (...args) {
    console.log(f.name, f(...args));
  }; //////변수 f의 클로저
}

console.log('----------------------배열속의 함수');
const fns = [Math.max, Math.min, parseInt];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

//참고 이건 커링이라고 보기 좀 어렵지? 한번에 나가니까
function fafa(f, ...args) {
  return function (...args) {
    console.log('samef2>>', f.name, f(...args));
  };
}

// 밑에 변환 자유롭게 될때까지 연습하기!
const af1 = (...args) => console.log(f.name, f(...args));

const af2 = (...args) => {
  console.log(f.name, f(...args));
};
const f22 = function (f) {
  return af2;
};

//currying
const f = () => () => {};

//const af = () => {};
const af = () => {};

const ffx = () => af;

function ff() {
  return af; //return function () {}; 이거랑 같아
}

console.log('--------');

const arr = [1, 2, 3, 4, 5];
// const arr = new Array(1,2,3,4,5); //원래는 이런 모양이겠지
Array.prototype.first = function () {
  //first 라는 함수를 전달해서 강제로 실행되게 하는거야 함수부여하면 실행해줌
  return this[0];
};
Array.prototype.last = function () {
  //last 라는 함수를 전달해서 강제로 실행되게 함 함수부여하면 실행해줌
  return this[this.length - 1];
};
console.log(arr.first(), arr.last());

// ['1', '2', '3'].map((a, idx, org) => parseInt(a)) // [1,2,3] 이걸 테스크큐에 담아 그러니까
//  [('1', '2', '3')].map(parselnt) //[1,NaN,NaN]    // 여기서 parseInt해서 NaN이 나오는 이유는 테스크큐에서 2는 2,1,[1,2,3]이 들어올텐데
// 2진수는 2가 없으니까 1, NaN , NaN 2와 3자리는 NaN이 나오는거지

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀 ~ ret2:', ret2);

function fffff(a, b, c) {
  console.log(fffff.length);
}
