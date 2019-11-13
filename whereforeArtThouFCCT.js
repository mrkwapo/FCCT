// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  let arr = [];
  let first = arguments[0];
  for (let i = 0; i < first.length; i++) {
    let eachObj = arguments[0][i];
    if (
      Object.keys(eachObj)
        .toString()
        .includes(Object.keys(source).toString()) &&
      Object.values(eachObj)
        .toString()
        .includes(Object.values(source).toString())
    ) {
      arr.push(eachObj);
    }
  }
  console.log(arr);
  return arr;
}

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' }
//   ],
//   { last: 'Capulet' }
// );

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
