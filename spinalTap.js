// Intermediate Algorithm Scripting: Spinal Tap CasePassed
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  var regex = /[^a-z]/gi;
  var replaceNonAlpha = str.replace(regex, "-");
  console.log(replaceNonAlpha.toLowerCase());

  return replaceNonAlpha.toLowerCase();
}

spinalCase("This Is Spinal Tap");
//spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
//spinalCase("AllThe-small Things");
