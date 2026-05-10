const user=[55,4,65,3,75,3];

const total=user.reduce((acc,curr)=>
  acc&& curr>500,true
)
console.log(total);


