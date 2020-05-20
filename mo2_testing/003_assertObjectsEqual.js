// working case:
// var person = {
//   firstName: 'Cassidy',
//   lastName: 'Jacobs'
// };
var person = {
  firstName: 'Joe',
  lastName: 'Blow',
};

function updateObject(person, keyValue, value) {
  person[keyValue] = value;
  return person;
}
// updateObject(person, 'firstName', 'Jack');
updateObject(person, 'age', 35);
// var expected = {
//   firstName: 'Jack',
//   lastName: 'Jacobs'
// };
var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35,
};
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(
      'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual
    );
  }
}
assertObjectsEqual(
  person,
  expected,
  "updates person's existing first name field"
);
