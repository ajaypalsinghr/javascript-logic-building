
const data=[
  {id:1,name:"ajay",email:"ajay@com",status:true,day:230, price:400},
  {id:2,name:"vijay",email:"",status:false, day:1566 ,price:2300} ,
  {id:3,name:"vikasj",email:"vikas@gmail.com",status:true,day:300,price:1000},
]
const dataMap=data.map((item)=>{
if(item.status===true &&item.day>140 &&item.price>300)
{
return {
  ...item,pass:"you are eligible for final exam",price:"big ammount "
}
}
else if(item.status ===false &&item.email===""&&item.day>150)
{
  return {
  ...item,email:`@${item.email}`
}
}
return item
})
console.log(dataMap)