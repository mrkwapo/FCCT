function dropElements(arr, func) {

  //checking for the first number in the array, "arr", that meets the requirements of func and returning the sliced arr array at that index 
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr.slice(arr.indexOf(arr[i]))
    }
  }
  //if nothing in the arr array meets the requirements of func, drop/slice all numbers in the array and return an empty array
  return arr.slice(arr.indexOf(arr.length) + 1);
}

dropElements([1, 2, 3], function (n) { return n < 3; });

T: 25
