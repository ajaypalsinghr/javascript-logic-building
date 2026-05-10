const product=[
  {
   name:"iPhone",
   price:2000,
  },
    {
   name:"apple",
   price:5000,
  },
    {
   name:"samsung",
   price:9000,
  },
    {
   name:"vivo",
   price:400,
  },
]
const discountofProduct=({name,price})=>{
   let upper=name.toUpperCase();
   let discountPrice=price*0.9;
   let finalprice=price-discountPrice;
   
   return {name:upper,price:price,discount:finalprice,finalprice:discountPrice}
}
const userFilter=({price})=>{
 return price>=2000;
}
const pricereduce=(acc,cur)=>{
  return acc+cur.finalprice
}
 const proFun=(item)=>{
 return item.filter(userFilter).map(discountofProduct).reduce(pricereduce,0);
 }

 const outPut=proFun(product);
 console.log(outPut)