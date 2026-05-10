const user=[566,35,766,34];
let userdata=user.map((item)=>{

  return{
    userItem:item,isActive:item>500?"isActive offer":""
  }
})
console.log(userdata);
