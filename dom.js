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


// let form=document.querySelector("form");
// let username=document.getElementById("uName");
// let mail=document.getElementById("uMail");
// let password=document.getElementById("uPass");
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname=username.value;
//     let uemail=mail.value;
//     let upass=password.value;
//     let userDetails={
//         uname, uemail, upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })
// let mainEle=document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);
// let topEle=document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// let image=document.createElement("img");
// image.src="http://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.style.width="550px";
// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// let h1=document.createElement("h1");
// h1.innerText="CAT";
// h1.style.textAlign="centre"
// let btn=document.createElement("button");
// btn.innerText="view More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="doderblue";
// btn.style.color="white";
// bottomEle=appendChild(h1);
// bottomEle=appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);
let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.querySelectorAll('input[name="gender"]'); // Updated for radio buttons

check.addEventListener("click", (event) => {
    if (event.target.checked == true) {
        password.setAttribute("type", "text");
        show.innerText = "hide password";
    } else {
        password.setAttribute("type", "password");
        show.innerText = "show password";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";

    // Loop through radio buttons to get the checked value
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
            break;
        }
    }

    let userDetails = {
        username: un,
        password: up,
        gender: gen,
    };
    console.log(userDetails);
    sessionStorage.setItem("userDta", JSON.stringify(userDetails));
});
