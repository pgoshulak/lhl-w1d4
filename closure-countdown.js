var countdownGenerator = function (x) {
  var currentCount = x
  
  return function() {
    if (currentCount >= 1) {
      console.log(`T-minus ${currentCount}...`)
    } else if (currentCount === 0) {
      console.log('Blast Off!')
    } else {
      console.log('Rocket\'s already gone, bub!')
    }
    currentCount -= 1
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!