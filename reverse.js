
let data=[12,3,23,55,24];
console.log(data)

let j=data.length-1;
for (let i=0;i<j;i++){
  let temp=data[i]
  console.log(temp)
data[i]=data[j];
  console.log(data[i])
data[j]=temp
  console.log(data[j])
j--;
}
console.log(data)




