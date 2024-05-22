// let a = 1, b = 2;
let a = 1;
let b = 2;

let c = (a++, b++);
// ==> a = a + 1; let c = b; b = b + 1;
let c1 = (a++, ++b);
// let c = ((a = a + 1), (b = b + 1));
console.log('c =', c, a, b);

let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

console.log('-------------------');
const first = 'Uncle';
const last = 'Bob';
if (first) {
  console.log(first);
}
console.log(last);

let FullName = first ? first + ' ' : '';
//          'Uncle ' + 'Bob'
//            ''     + 'Bob'
FullName = FullName + last;
console.log('fullName =', FullName);

console.log(`${first}${first ? ' ' : ''}${last}`);

console.log('---------------');

//// 비트 연산자 ////
const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(parseInt('101', 36));
console.log(parseFloat('10.100'));
console.log(Number('10.100'));

console.log(Infinity);
// console.log(-Infinity); //-Infinity
console.log(isNaN(Infinity));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log('-------------------');
console.log(9007199254740991 === 9007199254740992); //false
console.log(9007199254740991n === 9007199254740992n); //false

console.log('-------------------');

////숫자에 대한 고찰////
console.log(Number.isInteger(0.1));

const num = 123.456;
console.log(num.toFixed(2)); //'123.46'
console.log(Math.trunc(Number(num.toFixed(2)) + 9)); //132

const three = 0.1 + 0.2;
console.log(0.1 + 0.2); //0.30000000000000004 - 정확한 값을 안줘
console.log(0.1 + 0.7); //0.7999999999999999 - 정확한 값을 안줘 : 왜? 2진수 기반이기 때문(비트의 보수의 한계)
console.log(0.3 + 0.2); //0.5
console.log(Math.trunc((0.1 + 0.2) * 10) / 10); //0.3 : 이러면 정확한 값이 나와
console.log(2.5 % 1); //0.5
console.log(2.4 % 1); //0.3999999999999999

console.log('=================');
if (three == 0.3) {
  console.log('OK');
} else {
  console.log('exists garbage!');
}

const x = 2;
//x가 1이면 one, 2면 two , 3이면 four, 그외 etx
if (x == 1) {
  console.log('one');
} else if (x == 2) {
  console.log('two');
} else if (x == 3) {
  console.log('four');
} else {
  console.log('etc');
}

// outstr 써서 해봐 (코드개선)

// switch 문 써봐 (코드개선)

// 3항연산자 써봐 (코드개선)

// or 연산자로 해봐 (코드개선)

console.log('---------------------');

let i = 5;
while (i > 0) {
  console.log('🚀 ~ i:', i);
  i = i - 1; // i--
}
i = 5;

while (i-- > 0) console.log('🚀 ~ i:', i);

// j=0; while(j<5) {j++; ...}
for (let j = 0; j < 5; j++) {
  console.log('j=', j);
}

for (let j = 5; j > 0; j--) {
  console.log('j=', j);
}

console.log('---------------------');
i = 5;
do {
  console.log('🚀 ~ i:', i);
} while (i-- > 1);

console.log('---------------------');
// 1~100 까지 출력하기
// 1~100 까지 더하기 //5050

// 1. while
i = 100;
let sum = 100;
while (i > 0) {
  i = i - 1;
  sum = sum + i;
}
console.log('🚀 sum:', sum); //5050

console.log('--------------');
// 2. for

let sum1 = 100;
for (let j = 0; j < 100; j++) {
  console.log('j=', j);
  sum = sum + i;
}
console.log('🚀 sum:', sum); //5050

//배열 출력하기
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr?.length; i++) {
  console.log(` arr[${i}]:`, arr[i]);
}

for (const t of arr) {
  console.log(' t:', t);
}

{
  const t = arr[0];
}

const user = { id: 1, name: 'hong' };
for (const p in user) {
  console.log(' p:', p, user[p]); //user['id']
}

console.log('+++++++++++++++');

////연습문제 52
const dt = new Date();
console.log('🚀 ~ dt:', dt, dt.getFullYear());
