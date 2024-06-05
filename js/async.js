//https://jsonplaceholder.typicode.com/ 유저의 이름을 구하는 함수를 작성함
//서버랑 연결하는 법

const URL = 'https://jsonplaceholder.typicode.com';

const getUserName = async (userId) => {
  const res = await fetch(`${URL}/users/${userId}`);
  //   console.log('🚀 ~ getUserName ~ res:', res);
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve('OK'), 2000);
  });
  const data = await res.json();
  //   console.log('🚀 ~ getUserName ~ data:', data);
  return data?.name;
};

console.log('1번유저명 :', await getUserName(1));
