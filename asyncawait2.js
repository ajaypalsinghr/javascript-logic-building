


async function checkweather()
{

  console.log("masum ka hal")
  try{
    let response=await fetch("http://jsonplaceholder.typicode.com/todos/1");
    let data=await response.json();
    console.log("mill gya data",data.title)
  }
  catch(error)
  {
    console.log(`server band hai${error}`)
  }
}
checkweather()