
const array=[10,20,39]


// let check=[];
// if(array.length===2)
// {
//   check=array;
// }
// else{
//   check=false;
// }
let store=array.map((value)=>{
  if(array.length>=4)
  {
    return value
  }
  else{
   return false
  }
})
console.log(store)