//자바스크립트 시작하기

//////**변수와 타입**///////
console.log('슬라이드 27p -----------------------------------');
// 1. stack비교와 String객체의 비교 방식에대해 이해
s1 = new String('xx');
s2 = 'xx';
s1 != s2; //false , s1 == s2// true ,s1 === s2//false

// 2. Pfimitive Type
const n = 123; //8B //Number타입 : -2^53 ~ 2^53 미만
const bi = 123n; //16B //BigInt타입 : 매우 큰 정수 표현위함 : 2^53 이상 : 숫자끝에n 붙여서 표현 : 산술연산자(+,-,%,* 등)는 지원 : 단 Number와 혼합사용 불가
//BigInt사용 주의사항 : 혼합연산 불가,JSON변환하면 오류발생
n === bi; // false
n == bi; //true
// n + bi; //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions //타입이 달라용
Number('abc'); //NaN
const s = 'abc';
const ss = new String('abc');
const sss = `${s} - ${n + Number(bi)}`; //template literal

console.log('🚀 ~ sss:', sss); //abc-246

const b = false; //boolean
const bb = new Boolean(); //undefined -> false 인수전달안해서false로 간주//object
b === bb; // false
b == bb; // true
Boolean(bb); //true //Boolean컨텍스트에서 객체는 항상 truthy 즉 true로 평가됨
Boolean(b); //false

const sym = Symbol('foo'); // 새로운 고유 심볼 생성
const sym2 = Symbol('foo'); // 또 다른 새로운 고유 심볼 생성
const sym3 = Symbol.for('foo'); // 전역 심볼 레지스트리에서 'foo'를 검색하거나 생성
const sym4 = Symbol.for('foo'); // 전역 심볼 레지스트리에서 'foo'를 검색하여 반환

console.log(sym === sym2); // false, 고유한 심볼이기 때문에 다름
console.log(sym3 === sym4); // true, 전역 심볼 레지스트리에서 동일한 심볼 참조

u = undefined;
nu = null;
u == nu; //true
u === nu; //false
typeof null; //'object'

console.log('슬라이드 28p -----------------------------------');
//** object(객체)/Reference(참조) Type

const o1 = new Object(); // undefined
const o2 = {}; // undefined
Object.create({}); //{}
const user = {
  id: 1, //프로퍼티(키:id,값:1)
  name: 'Hong', //프로퍼티(키:name,값:Hong)
  get: function (obj) {
    return `${obj.id}:${dbj.name}`;
  }, //function 프로퍼티
  getInfo() {
    return `${this.id}-${this.name}`;
  }, //method
}; // undefined
user.id === user['id']; // 1===1 ->  true

console.log('슬라이드 29p -----------------------------------');
// ** 형변환(Type Conversion/Casting)
//n = 123;
n.toString(); //'123'
n.toString(2); // '1111011'
n.toString(8); // '173'
n.toString(36); // '3f'
parseInt(n.toString(36), 36) === n; // true

//parseInt
let age = parseInt('30');
console.log('🚀 ~ age:', age); //30 : 문자를 숫자로 반환

let str = parseInt('123숫자들');
console.log('🚀 ~ str:', str); //123 : 숫자먼저시작하면 숫자로 반환

let str1 = parseInt('숫자들123');
console.log('🚀 ~ str1:', str1); //NaN : 문자먼저시작되면 NaN반환

let sing = parseInt('lalala');
console.log('🚀 ~ sing:', sing); //NaN : 문자만있다면 NaN반환

Number('10'); //10
parseFloat('10'); //10

Number(10.123123); //10.123123
parseFloat(10.123123); //10.123123

Number('   10   '); //10
parseFloat('   10   '); //10

Number('12 34 56'); //NaN
parseFloat('12 34 56'); //12

Number('50 years'); //NaN
parseFloat('50 years'); //50

Number('he is 60'); //NaN
parseFloat('he is 60'); //NaN

Number(true); //1
parseFloat(true); //NaN

Number(false); //0
parseFloat(false); //NaN

Number(null); //0
parseFloat(null); //NaN

Number(''); //0
parseFloat(''); //NaN

Number(undefined); //NaN
parseFloat(undefined); //NaN

const x = 5;
console.log('🚀 ~ x:', typeof x, typeof !!x, typeof !x);
//number boolean boolean //not연산자를 쓰면 이미 출력이 ture false로 나오니까 boolean
//거기서 한번더 not연산자써도 false를 ture로 바꾸는 boolean 이라서 저런 출력결과 나옴

const d1 = Date();
const d2 = new Date();
console.log('🚀 ~ d1:', typeof d1); //string
console.log('🚀 ~ d2:', typeof d2); //object

console.log('🚀 ~ d1:', d1.valueOf()); //Tue May 28 2024 18:07:50 GMT+0900 (대한민국 표준시)//계속바뀜
console.log('🚀 ~ d2:', d2.valueOf()); //1716887283992//계속바뀜

//typeof 와 valueOf 예제
// const s = new String('test');
// typeof s; // 'object'
// s.valueOf(); // 'test'
// typeof s.valueOf(); // 'string'

console.log('🚀 ~ :', 'sss' + 2, 'sss' + { id: 1 }); //sss2 sss[object Object]//문자열병합연산자 (concat)
s1 = { id: 1 } + 2; //병합연산자
r = x + '30'; //병합연산자
q = x * '30'; //산술연산자
console.log('🚀 ~ :', s1, typeof s1, '/', r, typeof r, '/', q, typeof q); //[object Object]2 string / 530 string / 150 number

console.log('슬라이드 30p -----------------------------------');
let str111 = '래퍼 객체 이해하기';
console.log('🚀 ~ str111:', str111.charAt(0)); //'래'
console.log('🚀 ~ str111:', str111.length); //10

i = 100; //100
i.toString(); //'100'
10 + i.toString(); //'10100'
10 + +i.toString(); //110

let u1 = 'hong'; //원래 u1은 'hong'
u1.age = 30; //강제로 30으로 형변환 해버렸어 //30 출력됨
console.log('🚀 ~ u1:', u1.age); //근데 다시 찍으면 Undefined 나와
// 즉, 해당 문에서만 형변환 되고 다시 원복
u1 = 7; //이건 값을 바꿔버린거야 'hong' -> 7
console.log('🚀 ~ u1:', u1, !i); // 7 , false

console.log('슬라이드 31p -----------------------------------');
