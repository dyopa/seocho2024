//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
//for (let i = 0.1; i < 1; i = i + 0.1) console.log(i); // right??
console.log('1번문제 for문 사용 ====================================');
let i = 0.1;

for (let i = 0.1; i < 1; i = i + 0.1) {
  if (i * 10 < 1);
  {
    console.log('🚀 ~ i:', Number(i.toFixed(1)));
  }
}

// 들어가야한다고 생각한것
// 1 : i 변수 선언
// 3 : for문(문제에서 제시됨)
// 2 : if (i * 10 > 1);
// 4 : toFixed로 소수점 1자리까지 표현
// 5 : Number 해서 숫자로 바꾸기
console.log('2번문제 Math.sqrt 사용 ================================');

let n = 1;

for (let n = 1; n < 11; n = n + 1) {
  if (Math.sqrt(n) % 1 === 0) {
  } else console.log('🚀 ~ n:', Number(Math.sqrt(n).toFixed(3)));
}

//들어가야한다고 생각한것
//1. n 변수 선언
//2. for문으로 1~10까지 출력
//3. if문 만들기 (제곱근이 정수면 아무것도 안하고, 정수가 아니면 출력
//4. Math,sqrt로 출력(문제에서 제시)
//5. toFixed사용 반올림 3자리까지
//6. 숫자로 변환(toFixed가 문자로 뱉으니까)
// 시행 착오
// 1. if문 무리수를 판별하게 하는게 어려워서 중학교 수학 개념 다시 공부함(유리수와 무리수..)
// 2. Math.sqrt(Number(n.toFixed(3))); 으로 시도했으나 반올림이 안됨
//    toFixed로 3번째 자리까지 맞추고 > 숫자로 바꾸고 > 다시 Math.sqrt로 소수점만들어버린 것 같다고 생각함. 의미가 없었음. 코드 수정 필요
//    Number(Math.sqrt(n).toFixed(3)); 으로 해결 Number안쓰면 문자열로 반환됨
