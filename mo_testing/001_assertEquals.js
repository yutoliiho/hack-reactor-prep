// Please pay close attention to the exact punctuation and contents of the success and failure messages.

// Examples:
// SUCCESS CASE
// function multiplyByTwo(n) {
//   return n * 2;
// }
// var output = multiplyByTwo(2); // returns 4
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output: passed

// FAILURE CASE
// function multiplyByTwo(n) {
//   return (n * 2) + 1; // an incorrect implementation
// }
// var output = multiplyByTwo(2); // returns 5
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output: FAILED [it doubles 2 to 4] Expected "4", but got "5"

// FUNCTION DEFINITION(S)
function multiplyByTwo(n) {
  return n * 2;
}
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual == expected) {
    console.log('passed');
  } else {
    console.log(
      'FAILED [' +
        testName +
        '] Expected ' +
        '"' +
        expected +
        '",' +
        ' but got ' +
        '"' +
        actual +
        '"'
    );
  }
}
// TESTS CASES
assertEqual(multiplyByTwo(2), 4, 'it doubles 2 to 4'); // passed
assertEqual(multiplyByTwo(2), 10, 'it doubles 2 to 4'); // FAILED [it doubles 2 to 4] Expected "5", but got "4"
