//Intermediate Algorithm Scripting: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var newArray = [];
  var test = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      // console.log(arr[i]);
      newArray.push(arr[i]);
    }

    for (var j = 0; j < arr[i].length; j++) {
      if (!Array.isArray(arr[i][j])) {
        newArray.push(arr[i][j]);
      }
      for (var k = 0; k < arr[i].length; k++) {
        if (Array.isArray(arr[i][j][k])) {
          newArray.push(arr[i][j][k][0]);
        }
      }
    }


    if (!Number.isInteger(arr[i][0]) && Array.isArray(arr[i][0])) {
      newArray.push(arr[i].toString());
    }
  }

  console.log(newArray);

  return newArray;
}

//Tests:
  steamrollArray([1, [2], [3, [[4]]]]);

 //steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"]

 //steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4]

 //steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4]
 
 T: 1:08
