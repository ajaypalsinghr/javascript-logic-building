const userData=[5,33,65,3,64,5];

const formatAmmount=userData.map((value)=>{
let finalAmmount=value;
  if(value>50)
  {
finalAmmount=value*0.9;
  }
  const formatted=new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
    maximumFractionDigits:0,

  }).format(finalAmmount);
  return finalAmmount;
})
console.log(`final price${formatAmmount}`)
