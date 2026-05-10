
const user=[3,5,3,2,4,6,7]

const total=user.reduce((acc,curr)=>{
return curr%2!==0?acc+1:acc
},0)

console.log(total)