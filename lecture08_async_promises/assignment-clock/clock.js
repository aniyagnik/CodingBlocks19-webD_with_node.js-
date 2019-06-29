let time=60

let para=document.getElementById("para");
const id= setInterval(()=>{
    para.innerHTML=time
    
    time--
},1000)
setTimeout(()=>{
    clearInterval(id)
},61100)
//takes 1 sec extra