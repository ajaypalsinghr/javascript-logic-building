
const array=[34,65,33,65];

const ajay=array.reduce((max,cur)=>
  (cur>max?cur:max))
console.log(ajay);
