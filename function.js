// // 
// function demo(a,b){
//   return a+b;
// };
// function demo(a,b){
//   console.log("hi");
//   console.log("good morning");

//   return a+b
// };

// function hof(a){
//   return a;
// };
// // let x=hof(function(){return "hello iam a callback function"});
// // console.log(x);
// // x();
//  var a=100;
//  let b= "hi";
// function x(){
//   var user= "srinija";
//   let company="google";
//   const sal=5478963;
//   console.log(user);
//   console.log(company);
//   console.log(sal);
//   console.log(a,b);

// }
// x();
function x() {
  let a=10;
  const b=20;
  console.log(a,b);
  function y(){
    let p ="js";
    var q="reactjs";
    console.log(p,q);
    function z(){
      const username="srinija";
      console.log(username);
      console.log(a);
      console.log(q);
    }
    z();
  }
  y();
}
x();
/* const users=["usha","sai","sreeja","ashwika"];
/* console.log(users);
console.log(users[0]);
for(let i=0;i<users.length;i++){
    console.log(users[i]);
} */
/* let x=users.map((users)=>{
    /* console.log(users); */
    /* return users; */
/* });
console.log(x);
let y=users.forEach((user)=>{
    return user;
})
console.log(y);  */
//const users=["usha","sai","sreeja","ashwika"];
/* users.push("ram");//add last
console.log(users);
users.pop();//remove last
console.log(users);
users.unshift("krishna");//add first
console.log(users);

users.shift();//remove first
console.log(users);
users.unshift("krishna");
console.log(users.reverse()); */
/* let x=users.join()
console.log(x,typeof(x));

let frontend=["html","css","js","reactjs","angular","vue"];
let backend=["nodejs","expressjs","java","php","golang"];
let db=["Mongodb","mysql","oracle","couchdb","mariadb"];
let fullstack=frontend.concat(backend,db);
console.log(fullstack); *//* 
//!nested object
let userDetails={
	name:"Sai",
	age:18,
    city:"HYD",
    address:{
        area:"lakshmipuram",
        pincode:506207
    }
}
console.log(userDetails);
console.log(userDetails.name);
console.log(userDetails.address.area);
console.log(userDetails.address.pincode); */
//!create array of object
/* let userDetails={
	name:"Sai",
	age:18,
    city:"HYD",
    }
console.log(userDetails.name);
let userDetails1={
	name:"usha",
	age:18,
    city:"HYD",
    }
console.log(userDetails1.name);
let userDetails3={
	name:"ram",
	age:18,
    city:"HYD",
    }
console.log(userDetails3.name);
let userDetails4={
	name:"krishna",
	age:18,
    city:"HYD",
    } 
console.log(userDetails4.name); */ 
let userDetails=[{
	name:"srinija",
	age:18,
    city:"HYD"
    },
    {
    name:"kanna",
    age:18,
    city:"HYD"
    } 
]
userDetails.map((userDetail)=>{
    console.log(userDetail.name);
})
function fet(){
    window.fetch("")
    .then()
}
