var x=10;
{
  console.log("Inside block scope",x);
  x=20;
  console.log("Inside block scope after updation", x);
}
console.log("Outside block scope", x);
function h(){
  var a=30;
  console.log("Inside function",x);
}
h();
//console.log("outside func a",a); //=> cant be done because  is limited to func only;
