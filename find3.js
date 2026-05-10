
const user=[
  {
    brand:"apple",price:8000
  },
    {
    brand:"samsung",price:5000
  },
    {
    brand:"sumsung",price:25000
  },
]
const result=user.find((item)=>{
 return item.brand==="sumsung" &&item.price>5000
})
console.log(result)