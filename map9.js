
const stu=[
  {
  name:"ajay",
  email:"ajay@gmail.com",
  price:4000,
},
 {
  name:"vijay",
  email:"vijay@gmail.com",
  price:5000,
}
]
const ajay=stu.map((item)=>{
return {...item,price:item.price*1.1
}
})
console.log(ajay)
