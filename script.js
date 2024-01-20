let d=document.getElementById('decre')
let i=document.getElementById('incre')
let r=document.getElementById('reset')
let input=document.getElementById("in").innerText=0
console.log(input);
function decrement(){ 
    if (input>0) {
input=document.getElementById("in").innerText=--input
    }
    
}
function increment(){
input=document.getElementById("in").innerText=++input      
}
function Reset(){
input=document.getElementById("in").innerText=0      
    
}
d.addEventListener('click', decrement)
i.addEventListener('click', increment)
r.addEventListener('click', Reset)