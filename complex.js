
const user={
  id:101,
  firstName:"ajay",
  lastName:"kumar",
  address:{
    city:"delhi",
    pincode:1100466
  },
  hobbies:["coding","sprinting","gaming"]
}
const r=user.hobbies.forEach(i=>
  console.log(i)
)
const {city,pincode}=user.address
const {id,lastName}=user
console.log(id,lastName)
console.log(city)