
const product=[
  {
    id:1,name:"Laptop",price:5000,category:"Electronics",inStock:true,},

{
   id:2,name:"shift",price:5000,category:"Electronics",inStock:false,},
{     id:3,name:"mobile",price:5000,category:"fashion",inStock:true,},

          {   id:4,name:"watch",price:5000,category:"Electronics",inStock:true, }
]
const productName=product.map((item)=>{
return {
  ...item,price:item.price*0.9
}

})
console.log(productName)
const filterProduct=productName.filter((item)=>{
  if(item.category==="Electronics" && item.inStock===true)
  {
  return item;
  }
})
console.log(filterProduct)
const productBill=filterProduct.reduce((acc,curr)=>{

  return acc+curr.price
},0)
console.log("productBill=",productBill)