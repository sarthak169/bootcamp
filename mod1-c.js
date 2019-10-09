h = (ins) => console.log("hello"+ins); 
// h =()=>{
//   return "Hello 1";
// }
h('sarthak');
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function () {
  console.log('Finished my homework');
});
var numbers = [1, 3, 5, 7, 9];

function logNumber(number) {
  console.log('number', number);
}

// Passing in a callback to an out-of-the box function
numbers.forEach(logNumber);