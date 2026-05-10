const stu={
  name:"sandeep",
  course:{
    title:"full stack",
    subject:["html","css","js","react"]
  }
};

const r=stu.course.title
console.log(r)

//const {subject}=stu.course
const {title,subject}=stu.course
console.log(title,subject[3])