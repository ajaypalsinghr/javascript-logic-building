

const user={
  name:"ajy",
  status:{
    followers:500,
    posts:20
  },
  friends:["rahul","sumit","suamn"]
};

const update={...user,
 status:{
    ...user.status,followers:user.status.followers+1
  },
  friends:[...user.friends,"amit"]
}
console.log(update)

