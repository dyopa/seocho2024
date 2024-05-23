//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
//for (let i = 0.1; i < 1; i = i + 0.1) console.log(i); // right??

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
