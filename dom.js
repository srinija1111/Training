// let element = document.getElementById("demo");
// console.log(element);
// let ele = document.getElementsByClassName("test");
//  console.log(ele);
//  console.log(Array.isArray(ele));
//  ele[0].innerText="hello"
// //  ele[0].style.backgroundColor="tomato"

//  let x=[...ele];
//  x.map(element=>{
//     element.style.backgroundColor="pink" 
//  })
 
// let ele=document.querySelectorAll(".test");
// console.log(ele);
// let btn=document.querySelector("#btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("double clicked");
// })
// let divBlock=document.getElementById("divBlock");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow";
//     divBlock.style.backgroundColor="blue"
    
// });
// divBlock.addEventListener("mouseleave",()=>{
//     document.body.style.backgroundColor="orange"
//     divBlock.style.backgroundColor="aqua"
// })


let form=document.querySelector("form");
let username=document.getElementById("uName");
let mail=document.getElementById("uMail");
let password=document.getElementById("uPass");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname=username.value;
    let uemail=mail.value;
    let upass=password.value;
    let userDetails={
        uname, uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
})

