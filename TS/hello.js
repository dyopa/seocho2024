var myName = 'dyopa';
var s = 'abc';
s = 123;
console.log("Hello, World!");
console.log("Hello, ".concat(myName));
//객체를 정의하는 방법
var str = 'abc';
var user = { id: 1, name: 'Hong' };
user.addr = 'Seoul';
var emp = {
    id: 1,
    name: 'Kim',
    dept: 'Sales',
};
emp.dept = 12;
var Y = 'y'; //소문자 y타입
var Z = 'x'; //리터럴 타입
Z = 'y';
Z = Y; //위에 const Y = 'yy'로 바뀌어져있다면 통과안됨
var N = 3;
N = 2;
var member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    spend: [1, 2],
};
var guest = {
    name: '김길동',
    age: 28,
    spend: 1,
};
var who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee'; // OK 접근 가능
if ('discountRate' in who)
    console.log(who.discountRate);
// if ('addr' in who) 도 가능 addr property가 있다는 것은 Member type 이걸 타입  narrowing 이라고 한다.
//   if (who.discountRate ('addr)')) console.log(who.discountRate); 이건 안돼 TS 실행못시켜줘
//
// 네로우 예시
console.log('typeof who.spend=', typeof who.spend);
if (typeof who.spend == 'number') {
    console.log('who.spend.toFicd=', who.spend.toFixed(2));
}
else {
    console.log('who.spend.length=', who.spend.length);
}
//이것만 특별하게 돼 불규칙허용 isArray
var xarr = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr))
    console.log(xarr.length);
var gildong = Math.random() > 0.5 && 'HongGilDong';
if (gildong) {
    gildong.toUpperCase(); // string
}
else {
    //'' | false
    gildong; // false | string
}
var a;
// a = undefined; //a는 스트링이자 언디파인드인데 타입지정하면 밑에코드가 에러나 타입지정을 해버린거니까
if (typeof a == 'string')
    console.log(a === null || a === void 0 ? void 0 : a.length);
var hong = { id: 1, name: 'Hong', addr: 'Seoul' };
var users = [hong, { id: 2, name: 'Kim' }];
// console.log(users.find((user) => user.id == 3)?.['name']);
function getHong() {
    return { id: 1, name: 'Hong', addr: 'Seoul' };
}
var xuser;
var xemp;
xuser = { id: 1, name: 'Hong' };
xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; //freshness를 as로 꺼줬어
xuser = hong; //freshness off // 변수에 담거나 함수를 통하면,type casting,union으로 체크해서 제외 freshness off됨
xuser = getHong();
xemp = { id: 1, name: 'lee', addr: 'Pusan' };
xuser = xemp; //(id,name) <== (id,name, addr) : covariance
// xemp = xuser; //(id, name, addr) <== (id,name) : contravariance
function getX(obj) {
    return obj.name;
}
function getX2(obj) {
    return obj.name;
}
function ff(f) { }
