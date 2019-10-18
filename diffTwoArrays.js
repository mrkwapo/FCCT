// 2. Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//T:8.5
