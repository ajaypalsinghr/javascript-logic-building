
const num=[10,20];
const total=num.reduce((acc,curr)=>
  acc+curr,0
)
const average=total/num.length
console.log(average)