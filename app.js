let button = document.querySelector("button");
// let color= document.querySelector(".colorCode");
// let 


button.addEventListener("click",function(){
let random='#'+ Math.floor(Math.random()*16777216).toString(16)
 document.getElementById('code').innerHTML=random
 document.body.style.backgroundColor = random;
})

