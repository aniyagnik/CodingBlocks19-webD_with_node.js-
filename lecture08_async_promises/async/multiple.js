// setTimeout(()=>{
//     console.log("after 4 sec")
// },4000)
// setTimeout(()=>{
//     console.log("after 2 sec")
// },2000)

setTimeout(()=>{
    console.log(1)
},000)

setTimeout(()=>{
    console.log(2)
},1000)


//first-in first-out

const id= setInterval(()=>{
    console.log("every 1 sec")
},1000)

setTimeout(()=>{
    clearInterval(id)
},5100)

setTimeout(()=>{
    console.log(3)
},2000)