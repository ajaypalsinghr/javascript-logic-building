
let arrayNumber=[56,76,34,76];

let store=arrayNumber.map((value)=>{
 let a=value*2;
 let double=a+10;
 let square=double*double;
  console.log(double)
 return {
  a,double,square
 }
})
console.log(store);