//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
//for (let i = 0.1; i < 1; i = i + 0.1) console.log(i); // right??
console.log('1번문제 for문 사용 ====================================');
let i = 0.1;

for (let i = 0.1; i < 1; i = i + 0.1) {
  i * 10 < 1 ? i : '';
  console.log(+i.toFixed(1));
}

console.log('2번문제 Math.sqrt 사용 ================================');

let n = 1;

for (let n = 1; n < 11; n = n + 1) {
  Math.sqrt(n) % 1 === 0 ? '' : console.log(+Math.sqrt(n).toFixed(3));
}

console.log('3번문제 switch 사용 ================================');
// 오늘 날짜와 요일을 출력하는 switch문을 사용해서 작성해보고 ,switch를 사용하지 않는 방법도 써보세요.
// const new Date(); today.getDay(); //요일번호
// 오늘은 금요일 입니다. //(const WEEK_NAMES = '일월화수목금토')

const today = new Date();
{
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var week = today.getDay();

  console.log(`${year}-${month}-${day}`);
}

switch (week) {
  case 0:
    console.log('오늘은 일요일 입니다');
    break;
  case 1:
    console.log('오늘은 월요일 입니다');
    break;
  case 2:
    console.log('오늘은 화요일 입니다');
    break;
  case 3:
    console.log('오늘은 수요일 입니다');
    break;
  case 4:
    console.log('오늘은 목요일 입니다');
    break;
  case 5:
    console.log('오늘은 금요일 입니다');
    break;
  case 6:
    console.log('오늘은 토요일 입니다');
    break;
    console.log('🚀 ~ today:', week);
}

console.log('3번문제 switch (X) ---------------------------------');

const WEEK_NAMES = '일월화수목금토';
var today_1 = new Date().getDay();
console.log(`오늘은 ${WEEK_NAMES[today_1]}요일 입니다`);

console.log('4번문제 addpoint 아직 못품================================');
//다음과 같이 올바른 더하기 연산을 하는 addpoints 함수를 작성하시오.
//(단,소수점 자리수는 긴쪽으로 맞춘다)

function getLen(s) {
  return (s ?? '').toString().length;
}
function addPoints(a, b) {
  // let len = getLen(a);
  // if (getLen(b) > len) len = getLen(b);

  // const aLen = getLen(a);
  // const bLen = getLen(b);
  // const len = aLen > bLen ? aLen : bLen;

  const len = Math.max(getLen(a), getLen(b));

  const ret = (a + b).toFixed(len - 2);
  console.log('🚀>>', ret);

  return +ret;
}
console.log(addPoints(0.21354, 0.1) === 0.31354);
console.log(addPoints(0.14, 0.28) === 0.42);
console.log(addPoints(0.34, 0.226) === 0.566);
