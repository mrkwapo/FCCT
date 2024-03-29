Intermediate Algorithm Scripting: Sorted UnionPassed
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

function uniteUnique(arr) {
  let newArr = [];

  for (let test1 = 0; test1 < arguments.length; test1++) {
    for (let test2 = 0; test2 < arguments[test1].length; test2++) {
      if (!newArr.includes(arguments[test1][test2])) {
        newArr.push(arguments[test1][test2]);
      }
    }
  }
  return newArr;
}

//Test cases below

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8].

//T:31
