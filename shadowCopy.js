var tiger = {
  name:'',
  location:'',
  age:''
};
var inp='abc';
var tig=[];
for(var i=0;i<5;i++){
  let newTiger = {...tiger};
  newTiger.name = inp+i;
  newTiger.age=i;
  tig.push(newTiger);
}
for(var i=0;i<tig.length;i++){
  if(tig[i].age>=2){console.log(tig[i].name);}
}
console.log(Array.isArray(tiger));