const LOALE_MAPPER = {
  korea: 'ko',
  japan: 'ja',
};

export function fromNow(dt, locale = 'ko') {
  return moment(dt).fromNow();
}

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log('**>>', fromNow(new Date()));
