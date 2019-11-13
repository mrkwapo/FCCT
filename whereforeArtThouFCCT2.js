function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var first = arguments[0];
  for (var i = 0; i < first.length; i++) {
    var eachObj = arguments[0][i];
    //console.log(eachObj);
    // console.log('Source keys: ' + Object.keys(source).toString());
    // console.log('collection keys: ' + Object.keys(eachObj).toString());
    //console.log('Source values: ' + Object.values(source).toString());
    //console.log('collection values: ' + Object.values(eachObj).toString());

    if (
      Object.keys(eachObj)
        .toString()
        .includes(Object.keys(source).toString()) ||
      (Object.values(eachObj)
        .toString()
        .includes(Object.values(source).toString()) &&
        !Object.keys(source)
          .toString()
          .includes(Object.keys(eachObj).toString()) &&
        !Object.values(source)
          .toString()
          .includes(Object.values(eachObj).toString()))
    ) {
      arr.push(eachObj);
    }
  }
  console.log(arr);
  // Only change code above this line
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

//whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
