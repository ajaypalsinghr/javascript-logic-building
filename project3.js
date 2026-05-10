
const products=[
  {
    id:1,
    name:"Laptop",
    price:50000,
    category:"Electronics",
    stock:5
  },
   {
    id:2,
    name:"mouse",
    price:3000,
    category:"Electronics",
    stock:0
  },
   {
    id:3,
    name:"keyboard",
    price:500,
    category:"Electronics",
    stock:10
  },
   {
    id:4,
    name:"T-shirt",
    price:600,
    category:"Fashion",
    stock:20
  },
   {
    id:5,
    name:"Jeans",
    price:2000,
    category:"Fashion",
    stock:15
  },
]

const searchResults=products.filter((item)=>{
return item.name.includes(("o"));
})
console.log(searchResults)

const total=products.reduce((acc,curr)=>{
  return acc+curr.price
},0)
console.log("totalprice=",total)

const anyEmpty=products.some((item)=>{
  return item.stock===0
})
console.log(anyEmpty);

const AllExpensive=products.every((item)=>{
return item.price>=500
})
console.log("all item expensive",AllExpensive)

const productFour=products.find((item)=>{
return item.id==4
})
console.log(productFour)
const {name,price}=productFour
console.log(`found item:${name} costing:${price}`)

const displayList=products.map(({name,price})=>{
  return `${name}-${price}`
})
console.log(`display list:${displayList}`);

const updateProducts=products.map((item)=>{
return item.name==="Laptop"?{...item,stock:10}:item

})

console.log(updateProducts)
function getProduct(id)
{
try{
  const item=products.find(item=>
    item.id===id
  )
if(!item)
{
  console.log("success:",item.name)
}
}
catch(error)
{
console.log("data is not found")
}
}
getProduct(7)