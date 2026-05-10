const marks=[80,90,70,60,100];

const total=marks.reduce((acc,cur)=>
acc+cur,0
)
const average=total/marks.length;
console.log(average)