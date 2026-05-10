


const user=["apple","mango","banana"];

const search="App";
const r=user.filter((item)=>{

  return item.toLowerCase().includes(search.toLowerCase())
})
console.log(r)