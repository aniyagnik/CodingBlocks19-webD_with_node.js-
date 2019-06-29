console.log(1)

setTimeout(()=>{
    console.log("after 4 sec")
},4000)
console.log(123)

for(let i=0;i<1e3;i++)
{
    console.log("span")
}//wait for some time
console.log("done")