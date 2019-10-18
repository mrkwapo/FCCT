// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function sumAll(arr) {
  var total = 0;
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  console.log(sorted);
  var smaller = sorted[0];
  console.log('This is smaller: ' + smaller);
  var bigger = sorted[1];
  console.log('This is bigger: ' + bigger);

  for (var i = smaller; i <= bigger; i++) {
    total += i;
  }

  console.log(total);
  return total;
}
//Tests
//sumAll([1, 4]);
sumAll([1, 4]);

//T:15.5
