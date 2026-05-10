

const isPrimium=(item)=>{
 return item.price>1000;
}

const addTax=(item)=>({
...item,name:item.name.toUpperCase()
});

const stuFun=(list)=>{

return list.filter(isPrimium).map(addTax)

}





const student=[
  {
    name:"ajay",
    price:2000,
  },
    {
    name:"vijay",
    price:500,
  },
    {
    name:"ravi",
    price:3000,
  }
]
let ajay=stuFun(student)
console.log(ajay)




