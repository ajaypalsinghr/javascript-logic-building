
const user=[
  {
    name:"rahul",
    role:"user",
  },
    {
    name:"ajay",
    role:"admin",
  },
    {
    name:"vikas",
    role:"user",
  },
]

const result=user.find((item)=>{
 return item.role=="admin"
})
console.log(result)