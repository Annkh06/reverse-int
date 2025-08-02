module.exports = function reverse(n) {
  if (n > 0) {
    return String(n).split('').reverse().join('') * Math.sign(n);
  }
  if (n < 0) {
    return String(-n).split('').reverse().join('');
  }
  return n;
};
