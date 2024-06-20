console.log('객체,프로퍼티 연습문제1 푸는중');

const arr = [100, 200, 300, 400, 500, 600, 700];
//1.for-in문을 사용하여 배열의 인덱스(키)를 출력하시오
//2.for-in문을 사용하여 배열의 원소(값)을 출력하시오(of)

const obj = { name: 'lim', addr: 'Yingsan', lecel: 1, role: 9, receive: false };
//3.for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오
//4.for-in문을 사용하여 프로퍼티 값을 출력하시오
//5.for-of문을 사용하여 프로퍼티 값을 출력하시오
//6.level 프로퍼티가 열거(노출)되지 않도록 설정하시오 //object.defineProperty
//7. role 프로퍼티는 읽기전용으로 설정하시오 // object.defineProperty

console.log('객체,프로퍼티 연습문제2 푸는중');
[
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
]; //배열을 객체로 만드시오 //hint.const [k,...v]=>[k:v]
// => {'A':[10,20], 'B':[30,40],'C':[50,60,70]}

//위에서 만든 객체를 다시 배열로 만드시오

console.log('객체,프로퍼티 연습문제3 푸는중');
//원시값만을 갖는 객체 kim을 복사하는 프로그램을 오브젝트의 클래스 메소드 또는 spread(...)연산자를 사용하지 말고 작성해보세요
const Kim = { nid: 3, nm: 'Hong', addr: 'pusan' };
const newKim = { ...Kim };

const newKim = copyObject(Kim);
newkim.addr = 'Daegu';
console.log(Kim.addr !== newKim.addr); //true면 통과
