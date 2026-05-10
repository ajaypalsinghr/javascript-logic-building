
const student=[
  {name:"ajaypal",
    age:6,

  },
   {name:"ajaypal",
    age:23,
  },

   {name:"ajaypal",
    age:15,
  },

   {name:"ajaypal",
    age:28,
  },
]

const userage=(item)=>{
return item.age>23
}
const taxFun=(item)=>{
  return {
    name:item.name.toUpperCase()
  }
}
const stuFunction=(list)=>{
       return list.filter().map.taxFun();
      }
let store=stuFunction(student);
console.log(store);






