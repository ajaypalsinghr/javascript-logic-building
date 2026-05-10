const stu=[
{
  id:1,
name:"ajay",
rollNo:1234,
},
{
  id:2,
name:"ajay",
rollNo:1234,
}
]
const store=stu.map((item)=>{

  return {
    ...item,isAvailable:true
  }
})
console.log(store)
