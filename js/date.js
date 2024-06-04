//import Cat from './oop,js';

import moment from 'moment'; //ESM 방식
// var moment = require('moment'); // CJS 방식
moment.locale('ko');
// moment.locale('ja'); 일본어 나와

const d = new Date();
console.log('🚀 ~ d:', d.toLocaleString());
const m = moment();
console.log('🚀 ~ m:', m.format('LLL'));
console.log('🚀 ~ m:', m.format('dddd'));
console.log('🚀 ~ m:', m.format('YYYY-MM-DD(ddd) hh:mm:ss'));
console.log('🚀 ~ m:', m.fromNow());

const writtenDate = moment('2024-04-30');
console.log('🚀 ~ writtenDate:', writtenDate.fromNow());

const nabi = new cat('Nabi'); //다른 파일에 있는걸 가져올거야
//다른 폴더에서 export하고 여기서 import하면 쓸수있어 (맨위에 써둘게)
// 그럼 나비가 태어나
