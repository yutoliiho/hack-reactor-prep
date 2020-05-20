// Please pay close attention to the exact punctuation and contents of the success and failure messages.

// Examples:

// SUCCESS CASE

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// // console output:
// // passed
// FAILURE CASE

// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// // console output:
// // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

// FUNCTION DEFINITION(S)
// 002_assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length) {
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
  } else {
    var passed = 0;
    for (var i = 0; i < actual.length; i++) {
      if (expected[i] !== actual[i]) {
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
      } else {
        // console.log('passed')
        passed++;
      }
    }
    if (passed === expected.length) {
      console.log('passed');
    }
  }
}

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
var expected = [1, 2, 3, 4];
var actual = [1, 2, 3, 4];

assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed
