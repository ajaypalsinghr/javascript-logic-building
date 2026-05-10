const data=[
{score:80,weight:0.2},
{score:50,weight:0.5},
{score:80,weight:0.7},
]

const user=data.reduce((acc,cur)=>{
  return{
   sumscore:acc.sumscore+(cur.score*cur.weight),
   sumweight:acc.sumweight+cur.weight
  };
},{sumscore:0,sumweight:0})
console.log(user)
const average=user.sumscore/user.sumweight
console.log(average)