class human{
  constructor(name,gender,age){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.area='karnataka';
    
  }
  info(){console.log('This is human class');}
}
class add extends human{
  constructor(name,gender,age,city,pcode){
    super(name,gender,age);
    this.city=city;
    this.pcode=pcode;
  }
  info(){
    super.info();
    console.log(`Hello ${this.name} ${this.gender} ${this.age}  living in ${this.city} ${this.pcode} `);
  }
}
//Object.prototype.infp = function(){console.log('this',this);}

const k = new add('sarthak','male',21,'banglore','110085');
k.info();
console.log(k);
//k.infp();
console.log(k.__proto__.__proto__.__proto__);
console.log(add.prototype);
const flip = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('success');
  } else {
    reject('failure');
  }
});

// .then handles resolved promises
// .catch handles rejected promises
flip
  .then(result => console.log('result', result))
  .catch(error => console.log('error', error));

// Promises are handled asynchronously.
// So even though this log appears after in the code,
// it will be the first log to have output.
console.log('after flip');
