

const user=[
  {id:1,name:"aj",mob:"3465"},
    {id:2,name:"ajay",mob:"2365"},
      {id:3,name:"jay",mob:"2465"},
        {id:4,name:"ay",mob:"3465"},
]

const r=user.map((item)=>{
if(item.id==5)
{
  return {...item,name:"vikas"}
}
else
{
return item
}

})
console.log(r)