
const student=[
  {
    id:1,
    name:"ajay",
    age:23,
    place:"sailaan",
    gmail:"ajay@gmail.com",
    price:2364,
  }
]
const outputUser=student.map((item)=>{

const userId=item.id.toString()
let userName=item.name.toUpperCase()
let userPrice=item.price*2;

return {
  ...item,id:userId,name:userName,price:userPrice
}
})
console.log(outputUser);