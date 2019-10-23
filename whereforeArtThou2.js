// Intermediate Algorithm Scripting: Wherefore art thouPassed
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

///////////////////////////////////
/////SUDO CODE////////////////////
//////////////////////////////////

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let [key, value] of Object.entries(source)) {
    var test2 = `${key}: ${value}`;
    //console.log('Test 2: ' + test2);
  }
  for (var i = 0; i < collection.length; i++) {
    // console.log(collection[i]);
    for (let [key, value] of Object.entries(collection[i])) {
      // var test = `${key}: ${value}`;
      var test = `${key}: ${value}`;
      if (test === test2) {
        //console.log('Test 1: ' + test);
        arr.push(collection[i]);
      }
    }
  }

  // Only change code above this line
  console.log(arr);
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
