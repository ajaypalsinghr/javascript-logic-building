const cart=[
  {
    item:"Laptop",
    price:50000,
    category:"Electronics",
  },
   {
    item:"Watch",
    price:5000,
    category:"Accessories",
  },
  {
    item:"HeadPhone",
    price:3000,
    category:"Electronics",
  },
   {
    item:"NoteBook",
    price:200,
    category:"Stationery",
  }
];

let electronics=cart.filter(item=>item.category=="Electronics");
console.log(electronics);

//apply 10% discount
const disCount=electronics.map(item=>item.price*0.9);
console.log(disCount)
//total
const totalBill=disCount.reduce((acc,curr)=>acc+curr,0);
console.log("Electronics total after discount:",totalBill);

