
const users=[
  {name:"rahul",workout:"running",duration:40,status:"complete"},
    {name:"Aman",workout:"sprinting",duration:20,status:"pending"},
      {name:"Annu",workout:"running",duration:30,status:"complete"},
        {name:"vijay",workout:"yoga",duration:60,status:"complete"},
]
const dataFind=(item)=>{
 const data=item.workout==="running" && item.status=="complete"
 return data;
}
const dataChange=(item)=>{
  let data=item.duration*60
  return  {
...item,data
  }
}



const userFun=(item)=>{
return item.filter(dataFind).map(dataChange)
}

let userList=userFun(users);
const datareduce=userList.reduce((cal,cur)=>{
return cal+cur.data
},0)

const result=userFun(users);
console.log(result)
console.log(datareduce)