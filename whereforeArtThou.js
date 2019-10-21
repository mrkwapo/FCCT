// Intermediate Algorithm Scripting: Wherefore art thouPassed
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

///////////////////////////////////
/////SUDO CODE////////////////////
//////////////////////////////////

//find a method to access a key value pair inside an abject
// find a way to repeat accessing key value pairs in each object within the array of objects
//if source's key value pair also exists in an object in the collection array push it inside a new array to be returned

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i = 0; i < collection.length; i++) {
    // if (collection[i].hasOwnProperty(Object.keys(source))) {
    //   console.log(collection[i]);
    // }

    //console.log(Object.values(collection[i]));

    //console.log(Object.values(source));

    if (Object.values(collection[i]).includes(Object.values(source))) {
      console.log(collection[i]);
    }
  }

  // Only change code above this line
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

// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (let [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
