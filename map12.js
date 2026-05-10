
const data=[65,34,76,34,76,56,76];
let a;
const store=data.map((marks)=>{
  if(marks>45)
  {
    a="pass";
  }
  else{
    a="Fail"
  }
})
console.log(store)