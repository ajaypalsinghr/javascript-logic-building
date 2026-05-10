

const product=[
  {name:"Iphone",price:30000},
  {name:"Cover",price:500},

]
const high=(item)=>{
  return item.price>10000
}
const upper=({name,price})=>{
  return{
     price:price,name:name.toUpperCase()
  }
}

const luxry=product.filter(high).map(upper)
console.log(luxry)