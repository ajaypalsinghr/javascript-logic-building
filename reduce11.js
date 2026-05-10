const data=[3,6,34,76,3,75];
const start=10;
const total=data.reduce((acc,cur)=>{
 return acc-cur
},start)
console.log(total)