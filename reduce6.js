
const array=[-5,-7,-34,-65,34,6,34,65];

const total=array.reduce((acc,curr)=>

  acc+Math.abs(curr),0
)
console.log(total)