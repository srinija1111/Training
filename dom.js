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
let divBlock=document.getElementById("divBlock");
divBlock.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="yellow";
    divBlock.style.backgroundColor="blue"
    
});
divBlock.addEventListener("mouseleave",()=>{
    document.body.style.backgroundColor="orange"
    divBlock.style.backgroundColor="aqua"
})