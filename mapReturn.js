
const ammount=[366,346,764,356];
const formatAmmount=ammount.map((value)=>{
return "$"+ value;
})
console.log(formatAmmount)

//without return otomatic understand by js

const ammount2=[7563,565,35,8,35];
const formatAmmount2=ammount2.map(value=>"$$"+value)
console.log(formatAmmount2)

