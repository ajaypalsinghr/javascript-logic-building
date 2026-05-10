
const user=[
  {id:1,name:"ajay",password:24536},

    {id:2,name:"apl",password:24536}
]

const r=user.map((item)=>{
  if(item.id===1)
  {
    return {...item,name:"ravi"}
  }
  return item
})
console.log(r)