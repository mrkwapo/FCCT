// Intermediate Algorithm Scripting: Missing lettersPassed
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  var notIncluded = [];
  //console.log(alphabetStr.includes(str));
  if (alphabetStr.includes(str)) {
    console.log(undefined);
    return undefined;
  }

  for (var i = 0; i < alphabetStr.length; i++) {
    if (str[i] !== alphabetStr[i] && alphabetStr[0] === 'a') {
      // console.log(alphabetStr[i]);
      notIncluded.push(alphabetStr[i]);
    }
  }
  console.log(alphabetStr.indexOf(notIncluded[0]));
  //console.log(notIncluded[alphabetStr.indexOf(notIncluded[i])]); //the answer!!!
  console.log(notIncluded[0]);
}

//fearNotLetter('abce');
//fearNotLetter('abcde');
//fearNotLetter('abce'); //should return "d".
//fearNotLetter('abcdefghjklmno'); //should return "i".
//fearNotLetter('stvwx'); //should return "u". //but returns a
fearNotLetter('bcdf'); //should return "e". //but returns a
//fearNotLetter('abcdefghijklmnopqrstuvwxyz'); //should return undefined.
