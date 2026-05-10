const CompanyEmploye=[
  {
    id:1,
    company:"Ipca labority",
    place:"Sejavta",
    district:"Ratlam",
    employeName:"ajaypal singh",
    email:"ajay@gmail.com",
    dep_:"PHarma",
    monthSalary:15000,
    cantinCostDay:20,
    totalDays:26,
    status:true,
  },
   {
    id:2,
    company:"Ipca labority",
    place:"Sejavta",
    district:"Ratlam",
    employeName:"pratik singh",
    email:"ajay@gmail.com",
    dep_:"PHarma",
    monthSalary:150000,
    cantinCostDay:20,
    totalDays:26,
    status:true,
  },
   {
    id:3,
    company:"Ipca labority",
    place:"Sejavta",
    district:"Ratlam",
    employeName:"jayraj singh",
    email:"ajay@gmail.com",
    dep_:"PHarma",
    monthSalary:15000,
    cantinCostDay:20,
    totalDays:26,
    status:true,
  },
   {
    id:4,
    company:"Ipca labority",
    place:"Sejavta",
    district:"Ratlam",
    employeName:"ajay singh",
    email:"ajay@gmail.com",
    dep_:"PHarma",
    monthSalary:200000,
    cantinCostDay:20,
    totalDays:26,
    status:true,
  }
]
let details=CompanyEmploye.map((item)=>{
  if(item.id==1)
  {
    return {
      ...item,status:true,
      monthSalary:160000
    }
  }
  return item
})
user=details.filter((item)=>{
  if(item.monthSalary>=16000&&item.status===true)
  {
    return item
  }
})
console.log(user)