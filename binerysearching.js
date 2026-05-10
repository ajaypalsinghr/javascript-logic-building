



const array=[10,20,30,40,50];
let low=0, high=array.length-1;
let target=40;
let result=-1;
while(low<=high)
{
  let mid=Math.floor((low+high)/2)
  if(array[mid]===target)
  {
    result=mid;
    break;
  }
  else if(array[mid]<target)
  {
    low=mid+1;
  }
  else{
    high=mid-1
  }
}
console.log(result)