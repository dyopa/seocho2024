// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역 변수 선언
  const x = 10;
  const y = 20;

  // 매서드 호출
  console.log(a + x + y); //130
}

// 함수 호출
foo(100);

// 매서드 호출
console.log(x + y); //3

console.log('--------------------');
// 전역변수 선언
var g1 = 1;
const c1 = 2;

// 함수 정의
function gfn(x) {
  // 지역 변수 선언
  var v1 = 3;
  const c2 = 4;
  g1 = 11;
  function fn(y) {
    const c2 = 5;
    console.log(x + v1 + c2 + g1 + c2 + y);
  }
  fn(6);
}
gfn(100);

if (g1 > 10) {
  let g1 = 1000;
}
console.log(g1);

console.log('-----------------');

var xxx = 1;
const yyy = 2;
function foo(aaa) {
  var xxx = 3;
  const yyy = 4;
  function bar(bbb) {
    const zzz = 5;
    console.log(aaa + bbb + xxx + yyy + zzz);
  }
  bar(10);
}
foo(20);
