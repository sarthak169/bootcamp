// var p = 10;
// function a() {
//   var counter =0;
//   function b(){
//     counter+=1;
//     return counter;
//   }
//   b();
//   return counter;
// }
// console.log(a());
// console.log(a());
// This Keywords
// function f1(){
//   return this;
// }
// console.log(f1());
function parent(){
  let un = '';
  let pas= '';
  function setuser (user){
    un=user;
  }
  function pass(pasw){pas=pasw}
  return{
    signu: function(uname,pword){
      setuser(uname);
      pass(pword);
    },
    signin: function(uname,pwrod){
      return (uname === un) && (pwrod===pas);
    },
    print: function() {
      console.log("username",un,'Password: ',pas);}
  };
}
const acc = parent();
acc.signu('sarthak','thisisNotMyPassword');

acc.print();
console.log(acc.signin('sarthaj', 'Pw'))