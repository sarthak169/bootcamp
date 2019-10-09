a=[1,2,3,4,65,20];
b=[5,1,34,5,13,54,6];
var fun,h=[],i=0,j=0;

fun = (a,b) =>{
while(i<a.length && j<b.length){
  h.push(a[i]+b[j]);
  i++;
  j++;
}
while(i<a.length){
  h.push(a[i]); 
  i++;
}
while(j<b.length){
  h.push(b[j]); 
  j++;
 }
}
fun(a,b);
for(i=0;i<h.length;i++)
{
  console.log(h[i]);
}

