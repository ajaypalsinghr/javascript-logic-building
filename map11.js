
const users=[
  {
    id:101,name:"ajaypal"
  },
    {
    id:102,name:"jaypal"
  },
    {
    id:103,name:"ajay"
  }
]
const store=users.map((item)=>{

  let user=item.id.toString();
  return {
    ...item,id:user
  }
})
console.log(store);