
// sum(1)(2)(3)(4)(5)(result => console.log('result', result));

// function sum(a){
//   return function (b){
//     return function(c){
//       return function(d){
//         return function(e){
//           var total = a+b+c+d+e;
//           return function(callback){
//             callback(total);
//           }
//         }
//       }
//     }
//   }
// }

// *************************// 

// const source = {
//   one: 1,
//   nest: {
//     two: 2,
//     three: 3
//   },
//   four: [4, 'four'],
//   log: function () { }
// };
// import _ from 'lodash';
// const lodashClone = _.cloneDeep(source);

// *************************// 


// var a= {};
// var b= {};
// console.log(Object.is(a,b)); // it only prints true when both the objects point to same reference.

// *************************// 


// const source = {
//   frank: 92,
//   elise: 95,
//   angie: 96,
//   timmy: 79
// };

// const target = {
//   timmy: 89,
//   joyce: 87
// };

// const source2 = {
//   jacob: 91,
//   timmy: 99
// };
// var g ={...source2,...target,...source};
// console.log(g);
// If we use ... at the end then it refers to the rest operators and if we use them while passsing or inside the function then they refer to the spread operator. Spread operator converts an array into list while an rest operator is used to take all the rest elements as the argument. For reference - https://dev.to/sagar/three-dots---in-javascript-26ci

// *************************// 
// const weapon = 'lightsaber';

// // Property shorthand.
// // When the property name and the variable name are identical,
// // the property name only has to be specified once.
// const vader = {
//   title: 'darth',
//   children: ['Luke', 'Leia'],
//   weapon // this is equivalent to weapon: weapon
// };

// console.log(vader);
// this is called property shorthand. 
// Whenever we have a variable which is also the property of some object then the value of variable is assigned to the property if the property is empty.

// *************************// 

// Array Destructuring

// const planets = [
//   'mercury',
//   'venus',
//   'earth',
//   ['mars', 'phobos', 'deimos']
// ];

// // Array destructuring
// const [one, two, three] = planets;
// console.log(one);

// const wizard = {
//   name: 'Harry',
//   age: 17,
//   info: {
//     hobby: 'Quidditch',
//     spells: ['Expelliarmus']
//   }
// };

// // Object destructuring
// // Create variables out of matching property names
// const {
//   name,
//   age,
//   house = 'Gryffindor',
//   info: { hobby }, // nested object destructuring
//   info // the nested destructuring above doesn't destructure the base property name. You have to destructure this separately.
// } = wizard;

// console.log(name, age, house, hobby, info);


// const source = {
//   kim: 99,
//   tom: 92
// };

// // The spread syntax looks like an ellipses: ...

// const clone = {
//   bob: 89,
//   ann: 95,
//   tom: 85,
//   ...source, // the source object is spread into the target
  
// };

// console.log('clone', clone);
// function fun() {
//   console.log('alpha');
//   setTimeout(console.log('beta'));
//   console.log('gamma');
// }
// fun();
// var a=[1,2,3];
// console.log(typeof(a.valueOf()));
// console.log(typeof([1,2,3,4]));
// function fun(){var g = 10;}
// fun();
// console.log(g);
// var v={
//   car:'big',
//   tyre: 'small',
//   info:function(){
//     console.log(this);
//     (function(){console.log(this);})();
//   }
// }
// v.info();
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 3;
console.log(Cat);
console.log(Cat.prototype);
console.log(Cat.__proto__.__proto__ === Object.prototype);
console.log(Object.prototype);
console.log(Cat.__proto__);