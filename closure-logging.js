// Using spread notation
/* var wrapLog = function (callback, name) {
  return function (...args) {
    var argString = args.join(', ')
    var result = callback(...args)
    console.log(`${name}(${argString}) => ${result}`)
  }
}; */

// Using old notation
var wrapLog = function (callback, name) {
  return function () {
    // Construct the string of the callback's arguments
    var args = []
    args.push.apply(args, arguments)
    var argString = args.join(', ')
    
    // Calculate result of callback
    var result = callback.apply(null, arguments)

    // Log the result
    console.log(`${name}(${argString}) => ${result}`)

  }
}

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24