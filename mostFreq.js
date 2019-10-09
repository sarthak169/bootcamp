
var a = [1,2,3,4,5,6,8,9,0,2,3,2,2,2];
var h;
h = (a) => {
  var hash={},i,mx=0,e;
  for(i=0;i<a.length;i++){
    var n=a[i];
    if(hash[n] === undefined){hash[n] = 1;}
    else{
      hash[n]+=1;
    }
    if(hash[n]>mx){mx=hash[n];
    e=n;}
  }
  return e;
} 
console.log(h(a));