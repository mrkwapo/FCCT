// 3. Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note:
// You have to use the arguments object.

function destroyer(arr) {
  // Remove all the values
  // console.log(arguments);
  // console.log('Arg 1: ' + arguments[0]);
  // console.log('Arg 2: ' + arguments[1]);
  // console.log('Arg 3: ' + arguments[2]);

  var newArray = [];
  var filteredArray = [];
  for (var j = 1; j < arguments.length; j++) {
    console.log(arguments[j]);
    newArray.push(arguments[j]);
  }
  for (var i = 0; i < arguments[0].length; i++) {
    //console.log(arguments[0][i]);
    if (!newArray.includes(arguments[0][i])) {
      filteredArray.push(arguments[0][i]);
    }
  }
  console.log(filteredArray);

  return filteredArray;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//T:45

