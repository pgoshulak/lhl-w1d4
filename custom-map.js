var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callback) {
  var result = []
  array.forEach((elem) => {
    result.push(callback(elem))
  })
  return result
}

var lengths = map(words, function(word) {
  return word.length;
});

var caps = map(words, function(word) {
  return word.toUpperCase();
});

var reversed = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(lengths)
console.log(caps)
console.log(reversed)