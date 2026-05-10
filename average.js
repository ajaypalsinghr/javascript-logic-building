const marks=[23,34,65,34,76];
let total=0;
marks.forEach((value)=>{
total=total+value;
})
const average=parseInt(total/marks.length);
console.log(`total marks=${total}`);
console.log(`average marks=${average}`);
