
const words=['apple','sserfdrf',"sab"];

const result=words.reduce((acc,cur)=>{
  return cur.length<acc.length?cur:acc
})
console.log(result)