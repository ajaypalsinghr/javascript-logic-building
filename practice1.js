
const products=[
  {name:"running shoes",price:2000,category:"shoes"},
  {name:"cricket Bat",price:5000,category:"sports"},
  {name:"socks",price:200,category:"shoes"},
  {name:"T-shirt",price:800,category:"Apparel"},
]
const productFind=(item)=>{
return item.category==="shoes";
}
const productDiscount=(item)=>{
   let  discountPrice=item.price*0.9
  let  discount=item.price-discountPrice

return{
  ...item,discount,discountPrice
}
}
const productTotal=(acc,curr)=>{

  return acc+curr.discountPrice
}
const productFun=(item)=>{
return item.filter(productFind).map(productDiscount).reduce(productTotal,0);
}
const result=productFun(products)
console.log(result)