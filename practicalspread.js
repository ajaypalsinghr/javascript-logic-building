

let data=[
  {id:1,name:"ajay",price:234},
  {id:2,name:"vijay",price:646},
  {id:3,name:"kavi",price:75},
]

const user=data.map((item)=>{
if(item.id===1)
{
  return {
    ...item,price:500
  }

}
return item
})
console.log(user)