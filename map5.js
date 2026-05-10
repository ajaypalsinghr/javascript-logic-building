
let presentage=[34,55,3,55,34,54];
let total=0
let store=presentage.map((value)=>{
total=total+value;
let p=(total/presentage.length)%100;
return {
  total,p
}
});
console.log(store);